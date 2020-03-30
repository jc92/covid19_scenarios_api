import { deserializeScenarioFromURL } from '../utils/URLSerializer';
import run from '../algorithms/run';
import { exportSimulation } from '../algorithms/model';

import { CountryAgeDistribution } from '../data/CountryAgeDistribution.types';
import countryAgeDistributionData from '../data/country_age_distribution.json';
import countryCaseCountData from '../data/case_counts.json';
import severityData from '../data/severityData.json';

import updateSeverityTable from '../utils/updateSeverityTable';

import { Context, SeverityTableRow } from '../types';

// Example of serialized string : %7B"population"%3A%7B"ICUBeds"%3A80%2C"cases"%3A"CHE-Basel-Stadt"%2C"country"%3A"Switzerland"%2C"hospitalBeds"%3A698%2C"importsPerDay"%3A0.1%2C"populationServed"%3A195000%2C"suspectedCasesToday"%3A10%7D%2C"epidemiological"%3A%7B"infectiousPeriod"%3A3%2C"latencyTime"%3A5%2C"lengthHospitalStay"%3A4%2C"lengthICUStay"%3A14%2C"overflowSeverity"%3A2%2C"peakMonth"%3A0%2C"r0"%3A2%2C"seasonalForcing"%3A0.2%7D%2C"simulation"%3A%7B"simulationTimeRange"%3A%7B"tMin"%3A"2020-01-31T00%3A00%3A00.000Z"%2C"tMax"%3A"2020-09-01T00%3A00%3A00.000Z"%7D%2C"numberStochasticRuns"%3A0%7D%2C"containment"%3A%5B%7B"t"%3A"2020-01-31T00%3A00%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-02-23T18%3A40%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-03-18T13%3A20%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-04-11T08%3A00%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-05-05T02%3A40%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-05-28T21%3A20%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-06-21T16%3A00%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-07-15T10%3A40%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-08-08T05%3A20%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-09-01T00%3A00%3A00.000Z"%2C"y"%3A1%7D%5D%2C"current"%3A"CHE-Basel-Stadt"%7D

export default async function runSimulation(ctx: Context) {
  const { q } = ctx.request.query;
  if (q === undefined) {
    ctx.throw(422, `Please provide a string query`);
  }
  try {
    const p = deserializeScenarioFromURL(q);
    const params = {
      population: p.data.population,
      epidemiological: p.data.epidemiological,
      simulation: p.data.simulation,
      containment: p.data.containment,
    };
    const paramsFlat = {
      ...params.population,
      ...params.epidemiological,
      ...params.simulation,
    };

    const isCountry = (country: string): country is keyof CountryAgeDistribution => {
      return Object.prototype.hasOwnProperty.call(countryAgeDistributionData, country);
    };

    const isRegion = (region: string): region is keyof typeof countryCaseCountData => {
      return Object.prototype.hasOwnProperty.call(countryCaseCountData, region);
    };

    if (!isCountry(params.population.country)) {
      ctx.throw(422, `The given country is invalid: ${params.population.country}`);
    }

    if (!isRegion(params.population.cases)) {
      ctx.throw(422, `The given confirmed cases region is invalid: ${params.population.cases}`);
    }

    const severity: SeverityTableRow[] = updateSeverityTable(severityData);

    const ageDistribution = (countryAgeDistributionData as CountryAgeDistribution)[params.population.country];
    const containmentData = params.containment.reduction;
    const newResult = await run(paramsFlat, severity, ageDistribution, containmentData);
    const { deterministic } = newResult;
    const tsv = exportSimulation(deterministic);
    ctx.body = tsv;
    ctx.status = 200;
  } catch (error) {
    ctx.throw(422, 'Cannot parse query string');
  }
}

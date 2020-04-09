import msgpack from 'msgpack-lite';
import { Context } from '../types';

// FRONT-IMPORTS
import { State } from '../../front/components/Main/state/state';
import { deserialize } from '../../front/components/Main/state/serialization/StateSerializer';
import { TimeSeries } from '../../front/algorithms/types/TimeSeries.types';
import { SeverityTableRow } from '../../front/components/Main/Scenario/ScenarioTypes';
import { run, intervalsToTimeSeries } from '../../front/algorithms/run';
import { exportSimulation } from '../../front/algorithms/model';
// import { getCaseCountsData } from '../../front/components/Main/state/caseCountsData';
import { updateSeverityTable } from '../../front/components/Main/Scenario/severityTableUpdate';
import severityData from '../../front/assets/data/severityData.json';

// const query = `~(current~'United*20States*20of*20America~containment~(~(id~'48cd8424-8d33-474b-9f62-6d3c433dedb4~name~'Intervention*20*231~color~'*23bf5b17~mitigationValue~40~timeRange~(tMin~1584662400000~tMax~1598918400000))~(id~'20f4152b-3432-4e1a-bf1a-6c4ecb1bb417~name~'Intervention*20*232~color~'*23666666~mitigationValue~60~timeRange~(tMin~1585094400000~tMax~1598918400000)))~population~(cases~'United*20States*20of*20America~country~'United*20States*20of*20America~hospitalBeds~1485000~ICUBeds~49499~importsPerDay~0.1~populationServed~330000000~suspectedCasesToday~9)~epidemiological~(infectiousPeriod~3~latencyTime~3~lengthHospitalStay~3~lengthICUStay~14~overflowSeverity~2~peakMonth~0~r0~3.2~seasonalForcing~0)~simulation~(simulationTimeRange~(tMin~1580515200000~tMax~1598918400000)~numberStochasticRuns~0)~ageDistribution~(0-9~39721484~10-19~42332393~20-29~46094077~30-39~44668271~40-49~40348398~50-59~42120077~60-69~38488173~70-79~24082598~80*2b~13147180))`;
// URL IS = // ?v=1&q=~(current~'United*20States*20of*20America~containment~(~(id~'48cd8424-8d33-474b-9f62-6d3c433dedb4~name~'Intervention*20*231~color~'*23bf5b17~mitigationValue~40~timeRange~(tMin~1584662400000~tMax~1598918400000))~(id~'20f4152b-3432-4e1a-bf1a-6c4ecb1bb417~name~'Intervention*20*232~color~'*23666666~mitigationValue~60~timeRange~(tMin~1585094400000~tMax~1598918400000)))~population~(cases~'United*20States*20of*20America~country~'United*20States*20of*20America~hospitalBeds~1485000~ICUBeds~49499~importsPerDay~0.1~populationServed~330000000~suspectedCasesToday~9)~epidemiological~(infectiousPeriod~3~latencyTime~3~lengthHospitalStay~3~lengthICUStay~14~overflowSeverity~2~peakMonth~0~r0~3.2~seasonalForcing~0)~simulation~(simulationTimeRange~(tMin~1580515200000~tMax~1598918400000)~numberStochasticRuns~0)~ageDistribution~(0-9~39721484~10-19~42332393~20-29~46094077~30-39~44668271~40-49~40348398~50-59~42120077~60-69~38488173~70-79~24082598~80*2b~13147180))

const severityDefaults: SeverityTableRow[] = updateSeverityTable(severityData);

export default async function runSimulation(ctx: Context) {
  const { resultType } = ctx.params;
  if (resultType !== 'tsv' && resultType !== 'binary') {
    ctx.throw(404);
  }
  const { v, q } = ctx.request.query;
  if (v !== '1') {
    ctx.throw(422, `This API only supports version 1 of serialised URLs`);
  }
  if (q === undefined) {
    ctx.throw(422, `Please provide a string query`);
  }
  try {
    const currentState: State = ({} as any) as State;
    const p = deserialize(q, currentState) as State;
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
      ...params.containment,
    };
    // const caseCounts = getCaseCountsData(params.population.cases);
    const containment: TimeSeries = intervalsToTimeSeries(params.containment.mitigationIntervals);

    intervalsToTimeSeries(params.containment.mitigationIntervals);
    const result = await run(paramsFlat, severityDefaults, p.ageDistribution, containment);
    // caseCounts.sort((a, b) => (a.time > b.time ? 1 : -1));
    const { deterministic } = result;
    if (resultType === 'tsv') {
      const tsv = exportSimulation(deterministic);
      ctx.body = tsv;
      ctx.status = 200;
    } else {
      ctx.body = msgpack.encode(deterministic);
      ctx.status = 200;
    }
  } catch (error) {
    ctx.throw(422, 'Cannot parse query string');
  }
}

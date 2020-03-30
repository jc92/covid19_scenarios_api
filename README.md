# covid19_scenarios_api

* a modest quick and dirty attempt to answer, among others, this issue : https://github.com/neherlab/covid19_scenarios/issues/117

* this is just a proof of concept.

## API

for now, the api only accepts GET queries on the /run route, with a single URL Encoded string as "q" search parameter, and returns a TSV output.

I used this for convenience for this example : this parameter can be directly copied from the URL of covid19_scenarios front.

for instance:

```
curl 'http://localhost:5000/run?q=%7B"population"%3A%7B"ICUBeds"%3A80%2C"cases"%3A"CHE-Basel-Stadt"%2C"country"%3A"Switzerland"%2C"hospitalBeds"%3A698%2C"importsPerDay"%3A0.1%2C"populationServed"%3A195000%2C"suspectedCasesToday"%3A10%7D%2C"epidemiological"%3A%7B"infectiousPeriod"%3A3%2C"latencyTime"%3A5%2C"lengthHospitalStay"%3A4%2C"lengthICUStay"%3A14%2C"overflowSeverity"%3A2%2C"peakMonth"%3A0%2C"r0"%3A2%2C"seasonalForcing"%3A0.2%7D%2C"simulation"%3A%7B"simulationTimeRange"%3A%7B"tMin"%3A"2020-01-31T00%3A00%3A00.000Z"%2C"tMax"%3A"2020-09-01T00%3A00%3A00.000Z"%7D%2C"numberStochasticRuns"%3A0%7D%2C"containment"%3A%5B%7B"t"%3A"2020-01-31T00%3A00%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-02-23T18%3A40%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-03-18T13%3A20%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-04-11T08%3A00%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-05-05T02%3A40%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-05-28T21%3A20%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-06-21T16%3A00%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-07-15T10%3A40%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-08-08T05%3A20%3A00.000Z"%2C"y"%3A1%7D%2C%7B"t"%3A"2020-09-01T00%3A00%3A00.000Z"%2C"y"%3A1%7D%5D%2C"current"%3A"CHE-Basel-Stadt"%7D'
```

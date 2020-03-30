import { ScenarioData } from '../algorithms/types/Param.types';
import scenarios from '../data/scenarios/scenarios';
import { State } from '../types';

export const scenarioNames = Object.keys(scenarios);

export function getScenarioData(key: string): ScenarioData {
  if (!(key in scenarios)) {
    throw new Error(`Error: scenario "${key}" not found in JSON`);
  }
  return scenarios[key];
}

// TODO: Add a default category to export
// TODO: @bruno_rzn: here i've removed the translation
export const DEFAULT_OVERALL_SCENARIO_NAME = 'CHE-Basel-Stadt';
export const CUSTOM_SCENARIO_NAME = 'Custom';

export const defaultScenarioName = DEFAULT_OVERALL_SCENARIO_NAME;

export const defaultScenarioState: State = {
  scenarios: scenarioNames,
  current: defaultScenarioName,
  data: getScenarioData(defaultScenarioName),
};

export function deserializeScenarioFromURL(serialized: string): State {
  /*
    We deserialise the URL by removing the first char ('?'), and applying JSON.parse 
  */
  const obj = JSON.parse(decodeURIComponent(serialized));

  // Be careful of dates object that have been serialized to string

  // safe to mutate here
  obj.simulation.simulationTimeRange.tMin = new Date(obj.simulation.simulationTimeRange.tMin);
  obj.simulation.simulationTimeRange.tMax = new Date(obj.simulation.simulationTimeRange.tMax);

  const containmentDataReduction = obj.containment.map((c: { t: string; y: number }) => ({
    y: c.y,
    t: new Date(c.t),
  }));

  return {
    ...defaultScenarioState,
    current: obj.current,
    data: {
      population: defaultScenarioState.data.population,
      containment: {
        reduction: containmentDataReduction,
        numberPoints: containmentDataReduction.length,
      },
      epidemiological: defaultScenarioState.data.epidemiological,
      simulation: obj.simulation,
    },
  };
}

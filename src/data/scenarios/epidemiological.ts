import { EpidemiologicalData } from '../../algorithms/types/Param.types';

export interface EpidemiologicalScenario {
  name: string;
  data: EpidemiologicalData;
}

// TODO: @bruno_rzn: here i've replaced incubationTime with latencyTime

const epidemiologicalScenarios: EpidemiologicalScenario[] = [
  {
    name: 'Slow/North',
    data: {
      r0: 2.2,
      latencyTime: 5,
      infectiousPeriod: 3,
      lengthHospitalStay: 4,
      lengthICUStay: 14,
      seasonalForcing: 0.2,
      peakMonth: 0,
      overflowSeverity: 2,
    },
  },
  {
    name: 'Moderate/North',
    data: {
      r0: 2.7,
      latencyTime: 5,
      infectiousPeriod: 3,
      lengthHospitalStay: 4,
      lengthICUStay: 14,
      seasonalForcing: 0.2,
      peakMonth: 0,
      overflowSeverity: 2,
    },
  },
  {
    name: 'Fast/North',
    data: {
      r0: 3.2,
      latencyTime: 4,
      infectiousPeriod: 3,
      lengthHospitalStay: 4,
      lengthICUStay: 14,
      seasonalForcing: 0.1,
      peakMonth: 0,
      overflowSeverity: 2,
    },
  },
  {
    name: 'Slow/South',
    data: {
      r0: 2.2,
      latencyTime: 5,
      infectiousPeriod: 3,
      lengthHospitalStay: 4,
      lengthICUStay: 14,
      seasonalForcing: 0.1,
      peakMonth: 6,
      overflowSeverity: 2,
    },
  },
  {
    name: 'Moderate/South',
    data: {
      r0: 2.7,
      latencyTime: 5,
      infectiousPeriod: 3,
      lengthHospitalStay: 4,
      lengthICUStay: 14,
      seasonalForcing: 0.1,
      peakMonth: 6,
      overflowSeverity: 2,
    },
  },
  {
    name: 'Fast/South',
    data: {
      r0: 3.2,
      latencyTime: 4,
      infectiousPeriod: 3,
      lengthHospitalStay: 4,
      lengthICUStay: 14,
      seasonalForcing: 0.2,
      peakMonth: 6,
      overflowSeverity: 2,
    },
  },
  {
    name: 'Slow/Tropical',
    data: {
      r0: 2.0,
      latencyTime: 5,
      infectiousPeriod: 3,
      lengthHospitalStay: 4,
      lengthICUStay: 14,
      seasonalForcing: 0.0,
      peakMonth: 6,
      overflowSeverity: 2,
    },
  },
  {
    name: 'Moderate/Tropical',
    data: {
      r0: 2.5,
      latencyTime: 5,
      infectiousPeriod: 3,
      lengthHospitalStay: 4,
      lengthICUStay: 14,
      seasonalForcing: 0.0,
      peakMonth: 6,
      overflowSeverity: 2,
    },
  },
  {
    name: 'Fast/Tropical',
    data: {
      r0: 3.0,
      latencyTime: 4,
      infectiousPeriod: 3,
      lengthHospitalStay: 4,
      lengthICUStay: 14,
      seasonalForcing: 0.0,
      peakMonth: 6,
      overflowSeverity: 2,
    },
  },
];

export default epidemiologicalScenarios;

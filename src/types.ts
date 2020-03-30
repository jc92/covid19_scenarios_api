import { Context as KoaContext } from 'koa';
import { ScenarioData } from './algorithms/types/Param.types';

export type Context = KoaContext;

export interface SeverityTableRow {
  id: number;
  ageGroup: string;
  confirmed: number;
  severe: number;
  critical: number;
  fatal: number;
  totalFatal?: number;
  isolated?: number;
  errors?: {
    confirmed?: string;
    severe?: string;
    critical?: string;
    fatal?: string;
    isolated?: string;
  };
}

export interface State {
  scenarios: string[];
  current: string;
  data: ScenarioData;
}

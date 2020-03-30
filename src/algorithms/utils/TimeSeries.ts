import { DateRange } from '../types/Param.types';
import { interpolateTimeSeries } from '../run';
import { TimeSeries } from '../types/TimeSeries.types';

// TODO: @bruno_rzn: here i did a little rewrite of D3.range function

export default function D3Range(start: number, stop: number, step: number) {
  let i = -1;
  let n = Math.max(0, Math.ceil((stop - start) / step)) | 0;
  const range = new Array(n);
  (start = +start),
    (stop = +stop),
    (step = (n = arguments.length) < 2 ? ((stop = start), (start = 0), 1) : n < 3 ? 1 : +step);
  while (++i < n) {
    range[i] = start + i * step;
  }
  return range;
}

export function uniformDatesBetween(min: number, max: number, n: number): Date[] {
  const d = (max - min) / (n - 1);
  const dates = D3Range(min, max + d, d).filter((_, i) => i < n);
  return dates.map(d => new Date(d));
}

export function makeTimeSeries(simulationTimeRange: DateRange, values: number[]): TimeSeries {
  const { tMin, tMax } = simulationTimeRange;
  const n = values.length;

  const dates = uniformDatesBetween(tMin.getTime(), tMax.getTime(), n);

  const tSeries = [];
  for (let i = 0; i < n; i++) {
    tSeries.push({ t: dates[i], y: values[i] });
  }

  return tSeries;
}

export function updateTimeSeries(simulationTimeRange: DateRange, oldTimeSeries: TimeSeries, n: number): TimeSeries {
  const { tMin, tMax } = simulationTimeRange;
  const interpolator = interpolateTimeSeries(oldTimeSeries);
  const clamp = function(x: number, min: number, max: number): number {
    if (x < min) {
      return min;
    }
    if (x > max) {
      return max;
    }
    return x;
  };

  const dates = uniformDatesBetween(tMin.getTime(), tMax.getTime(), n);
  return dates.map(d => ({ t: d, y: clamp(interpolator(d), 0, 1.2) }));
}

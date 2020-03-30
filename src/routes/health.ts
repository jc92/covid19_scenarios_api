import { Context } from '../types';

export default async function health(ctx: Context) {
  ctx.status = 200;
}

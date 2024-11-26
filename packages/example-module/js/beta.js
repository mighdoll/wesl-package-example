// AUTO-GENERATED BY WESL. Original filename: ./beta.wesl
// @ts-check

// ---
// Function types
// ---

/**
 * @template TArgs,TReturns
 * @typedef {object} WgslFn
 * @prop {'fn'} type
 * @prop {TArgs} args
 * @prop {TReturns} returns
 * @prop {string=} label
 */
const fn =
  /**@type{<TArgs extends unknown[] | [],TReturns>(args:TArgs,returns:TReturns, body: unknown)=>WgslFn<TArgs, TReturns>}*/ (
    (args, returns, body) => ({
      type: 'fn',
      args,
      returns,
      body,
    })
  );

// ---
// Definitions
// ---

import { double, Gradient } from './alpha.js';

export const create_red_to_blue_gradient = fn([], Gradient, [
  '() -> ',
  Gradient,
  ` {
  var result: `,
  Gradient,
  `;
  result.from = vec3f(1., 0., 0.);
  result.to = vec3f(0., 0., `,
  double,
  `(0.5));
  return result;
}`,
]);

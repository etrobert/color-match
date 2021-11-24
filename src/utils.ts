import { Swatch } from 'node-vibrant/lib/color';

/**
 * Source: https://stackoverflow.com/a/57834210
 */
const pairs = <T>(arr: T[]) =>
  arr.map((v, i) => arr.slice(i + 1).map((w) => [v, w] as const)).flat();

const hue = (color: Swatch) => color.getHsl()[0] * 360;

/**
 * Source: https://stackoverflow.com/a/7869457
 */
const mod = (a: number, n: number) => a - Math.floor(a / n) * n;

const colorDiff = ([color1, color2]: readonly [Swatch, Swatch]) => {
  const hue1 = hue(color1);
  const hue2 = hue(color2);

  const diff = hue1 - hue2;

  // Source: https://stackoverflow.com/a/7869457
  return Math.abs(mod(diff + 180, 360) - 180);
};

export { pairs, hue, colorDiff };

import hexToHsl from './hexToHsl';

/**
 * Source: https://stackoverflow.com/a/7869457
 */
const mod = (a: number, n: number) => a - Math.floor(a / n) * n;

const colorDistance = (c1: string, c2: string) => {
  const { hue: hue1 } = hexToHsl(c1);
  const { hue: hue2 } = hexToHsl(c2);

  const diff = hue1 - hue2;

  // Source: https://stackoverflow.com/a/7869457
  return Math.abs(mod(diff + 0.5, 1) - 0.5);
};

export default colorDistance;

import { Swatch } from 'node-vibrant/lib/color';
import { colorDiff, hue, pairs } from './utils';

const red = new Swatch([255, 0, 0], 0);
const blue = new Swatch([0, 0, 255], 0);

describe('pairs', () => {
  it('returns empty array given empty array', () => {
    expect(pairs([])).toStrictEqual([]);
  });

  it('handles two elements', () => {
    expect(pairs([1, 2])).toStrictEqual([[1, 2]]);
  });

  it('handles three elements', () => {
    const result = pairs([1, 2, 3]);
    expect(result).toContainEqual([1, 2]);
    expect(result).toContainEqual([2, 3]);
    expect(result).toContainEqual([1, 3]);
  });
});

describe('hue', () => {
  it('works in a simple case', () => {
    expect(hue(red)).toBe(0);
    expect(hue(blue)).toBe(240);
  });
});

describe('colorDiff', () => {
  it('works in a simple case', () => {
    expect(colorDiff([red, blue])).toBe(120);
    expect(colorDiff([blue, red])).toBe(120);
    expect(colorDiff([red, red])).toBe(0);
  });
});

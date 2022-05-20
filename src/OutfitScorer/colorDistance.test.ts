import colorDistance from './colorDistance';

const red = '#ff0000';
const blue = '#00ff00';

describe('colorDistance', () => {
  it('should return 0 for equal colors', () => {
    expect(colorDistance(red, red)).toBe(0);
    expect(colorDistance(blue, blue)).toBe(0);
  });

  it('should return 1/3 for red and blue', () => {
    expect(colorDistance(red, blue)).toBeCloseTo(1 / 3);
    expect(colorDistance(blue, red)).toBeCloseTo(1 / 3);
  });
});

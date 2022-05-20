import hexToHsl from './hexToHsl';

describe('hexToHsl', () => {
  it('can translate black', () => {
    expect(hexToHsl('#000000')).toStrictEqual({
      hue: 0,
      saturation: 0,
      lightness: 0,
    });
  });

  it('can translate red', () => {
    expect(hexToHsl('#ff0000')).toStrictEqual({
      hue: 0,
      saturation: 1,
      lightness: 0.5,
    });
  });
});

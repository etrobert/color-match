/**
 * Converts a hex code color to HSL representation
 *
 * Based on https://gist.github.com/xenozauros/f6e185c8de2a04cdfecf
 */
function hexToHsl(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result === null) throw new Error('Could not parse hex');
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let hue;
  let saturation;
  let lightness = (max + min) / 2;
  if (max === min) {
    hue = saturation = 0; // achromatic
  } else {
    var d = max - min;
    saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        hue = (b - r) / d + 2;
        break;
      default:
        hue = (r - g) / d + 4;
        break;
    }
    hue /= 6;
  }
  return { hue, saturation, lightness };
}

export default hexToHsl;

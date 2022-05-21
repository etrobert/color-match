import { atom, selector } from 'recoil';
import max from 'lodash/max';
import { pairs } from '../utils';
import colorDistance from './colorDistance';

const colorsState = atom<string[]>({ key: 'Colors', default: [] });

const monochromaticScoreState = selector<number>({
  key: 'MonochromaticScore',
  get: ({ get }) => {
    const colors = get(colorsState);

    if (colors.length < 2) return 0;

    const colorPairs = pairs(colors);
    console.log(colorPairs);
    const distances = colorPairs.map(([c1, c2]) => colorDistance(c1, c2));

    // Between 0 (best) and 0.5 (worst)
    const maxDistance = max(distances) as number;

    // Between 100 (best) and 0 (worst)
    return 100 - Math.floor((maxDistance * 100) / 0.5);
  },
});

export { colorsState, monochromaticScoreState };

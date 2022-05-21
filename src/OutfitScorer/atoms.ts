import { atom, selector } from 'recoil';
import colorDistance from './colorDistance';

const average = (array: number[]) =>
  array.reduce((a, b) => a + b) / array.length;

const colorsState = atom<string[]>({ key: 'Colors', default: [] });

const monochromaticScoreState = selector<number>({
  key: 'MonochromaticScore',
  get: ({ get }) => {
    const colors = get(colorsState);

    if (colors.length === 0) return 0;

    const allDistances = colors.map((c1) =>
      colors.map((c2) => colorDistance(c1, c2))
    );

    return average(allDistances.flat());
  },
});

export { colorsState, monochromaticScoreState };

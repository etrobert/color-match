import { atom, selector } from 'recoil';

const colorsState = atom<string[]>({ key: 'Colors', default: [] });

const monochromaticScoreState = selector<number>({
  key: 'MonochromaticScore',
  get: () => 0,
});

export { colorsState, monochromaticScoreState };

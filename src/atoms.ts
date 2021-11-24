import { Swatch } from 'node-vibrant/lib/color';
import { atom, selector } from 'recoil';
import flatten from 'lodash/flatten';

import { colorDiff, pairs } from './utils';

type View = 'outfits' | 'wardrobe';

type Garment = {
  imageData: string;
  colors: Swatch[];
};

type Outfit = {
  score: number;
  garments: readonly Garment[];
};

const viewState = atom<View>({
  key: 'View',
  default: 'outfits',
});

const wardrobeState = atom<Garment[]>({
  key: 'Wardrobe',
  default: [],
});

const computeScore = (garments: readonly Garment[]): number => {
  const colors = flatten(garments.map((garment) => garment.colors));
  const colorPairsScores = pairs(colors).map(colorDiff);
  return Math.max(...colorPairsScores);
};

const outfitsState = selector<Outfit[]>({
  key: 'Outfits',
  get: ({ get }) => {
    const wardrobe = get(wardrobeState);
    return pairs(wardrobe).map((pair) => ({
      garments: pair,
      score: computeScore(pair),
    }));
  },
});

export { viewState, wardrobeState, outfitsState };

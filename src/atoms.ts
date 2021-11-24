import { Swatch } from 'node-vibrant/lib/color';
import { atom } from 'recoil';

type View = 'outfits' | 'wardrobe';

type Garment = {
  imageData: string;
  colors: Swatch[];
};

const viewState = atom<View>({
  key: 'View',
  default: 'outfits',
});

const wardrobeState = atom<Garment[]>({
  key: 'Wardrobe',
  default: [],
});

export { viewState, wardrobeState };

import { atom } from 'recoil';

type View = 'newGarment' | 'outfits' | 'collection';

const viewState = atom<View>({
  key: 'View',
  default: 'outfits',
});

export { viewState };

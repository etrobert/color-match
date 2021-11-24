import { atom } from 'recoil';

type View = 'outfits' | 'collection';

const viewState = atom<View>({
  key: 'View',
  default: 'outfits',
});

export { viewState };

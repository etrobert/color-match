import { atom } from 'recoil';

const colorsState = atom<string[]>({ key: 'Colors', default: [] });

export default colorsState;

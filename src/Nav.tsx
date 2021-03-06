import { useSetRecoilState } from 'recoil';
import { viewState } from './atoms';

const Nav = () => {
  const setView = useSetRecoilState(viewState);

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => setView('outfits')}>Create Outfit</button>
        </li>
        <li>
          <button onClick={() => setView('wardrobe')}>My clothes</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

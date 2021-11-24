import { useRecoilValue } from 'recoil';

import { wardrobeState } from './atoms';

import './Wardrobe.css';

const Wardrobe = () => {
  const wardrobe = useRecoilValue(wardrobeState);
  return (
    <ul>
      {wardrobe.map((garment) => (
        <li>
          <img
            className="Wardrobe__image"
            alt="garment"
            src={garment.imageData}
          />
        </li>
      ))}
    </ul>
  );
};

export default Wardrobe;

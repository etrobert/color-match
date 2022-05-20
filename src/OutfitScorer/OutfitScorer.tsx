import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { monochromaticScoreState } from './atoms';
import Colors from './Colors';
import NewOutfitButton from './NewOutfitButton';

import './OutfitScorer.css';

const OutfitScorer = () => {
  const [outfit, setOutfit] = useState<string | null>(null);
  const monochromaticScore = useRecoilValue(monochromaticScoreState);

  return (
    <div className="OutfitScorer">
      {outfit !== null && (
        <img
          className="OutfitScorer__image"
          alt="Selected Outfit"
          src={outfit}
        />
      )}
      {`Monochromatic Score: ${monochromaticScore}`}
      <Colors />
      <NewOutfitButton onDone={setOutfit} />
    </div>
  );
};

export default OutfitScorer;

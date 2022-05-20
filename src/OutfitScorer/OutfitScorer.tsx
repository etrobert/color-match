import { useState } from 'react';
import Colors from './Colors';
import NewOutfitButton from './NewOutfitButton';

import './OutfitScorer.css';

const OutfitScorer = () => {
  const [outfit, setOutfit] = useState<string | null>(null);

  return (
    <div className="OutfitScorer">
      {outfit !== null && (
        <img
          className="OutfitScorer__image"
          alt="Selected Outfit"
          src={outfit}
        />
      )}
      <Colors />
      <NewOutfitButton onDone={setOutfit} />
    </div>
  );
};

export default OutfitScorer;

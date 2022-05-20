import { useState } from 'react';
import NewOutfitButton from './NewOutfitButton';

import './OutfitScorer.css';

const OutfitScorer = () => {
  const [outfit, setOutfit] = useState<string | null>(null);

  return (
    <>
      {outfit !== null && (
        <img
          className="OutfitScorer__image"
          alt="Selected Outfit"
          src={outfit}
        />
      )}
      <NewOutfitButton onDone={setOutfit} />
    </>
  );
};

export default OutfitScorer;

import { useState } from 'react';
import NewOutfitButton from './NewOutfitButton';

import './OutfitScorer.css';

const OutfitScorer = () => {
  const [outfit, setOutfit] = useState<string | null>(null);

  return (
    <>
      {outfit !== null && <img className="OutfitScorer__image" src={outfit} />}
      <NewOutfitButton onDone={setOutfit} />
    </>
  );
};

export default OutfitScorer;

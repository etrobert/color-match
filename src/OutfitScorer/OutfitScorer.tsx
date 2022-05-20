import { useState } from 'react';
import NewOutfitButton from './NewOutfitButton';

const OutfitScorer = () => {
  const [outfit, setOutfit] = useState<string | null>(null);

  return (
    <>
      {outfit !== null && <img src={outfit} />}
      <NewOutfitButton onDone={setOutfit} />
    </>
  );
};

export default OutfitScorer;

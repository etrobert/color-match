import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';

import { wardrobeState } from './atoms';
import ColorPicker from './ColorPicker';

import './NewGarment.css';

type Props = {
  imageData: string;
  onDone: () => void;
};

const NewGarment = ({ imageData, onDone }: Props) => {
  const [palette, setPalette] = useState<Palette>();
  useEffect(() => {
    Vibrant.from(imageData)
      .getPalette()
      .then((palette) => setPalette(palette));
  }, [imageData]);

  useEffect(() => {
    console.log(palette);
  }, [palette]);

  const setWardrobe = useSetRecoilState(wardrobeState);

  return (
    <>
      <img className="NewGarment__image" src={imageData} alt="garment" />
      {palette !== undefined && (
        <ColorPicker
          palette={palette}
          onSubmit={(colors) => {
            setWardrobe((wardrobe) => [...wardrobe, { imageData, colors }]);
            onDone();
          }}
        />
      )}
    </>
  );
};

export default NewGarment;

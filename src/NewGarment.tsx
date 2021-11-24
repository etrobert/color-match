import { useEffect, useState } from 'react';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';
import ColorPicker from './ColorPicker';

import './NewGarment.css';

type Props = {
  imageData: string;
};

const NewGarment = ({ imageData }: Props) => {
  const [palette, setPalette] = useState<Palette>();
  useEffect(() => {
    Vibrant.from(imageData)
      .getPalette()
      .then((palette) => setPalette(palette));
  }, [imageData]);

  useEffect(() => {
    console.log(palette);
  }, [palette]);
  return (
    <>
      <img className="NewGarment__image" src={imageData} alt="garment" />
      {palette !== undefined && <ColorPicker palette={palette} />}
    </>
  );
};

export default NewGarment;

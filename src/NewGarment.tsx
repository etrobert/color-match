import robe from './pictures/robe.jpeg';
import redOrange from './pictures/red-orange.jpg';
import robe2 from './pictures/robe2.jpeg';
import chemiseSatin from './pictures/chemiseSatin.jpeg';
import pullViolet from './pictures/pullViolet.jpeg';
import bite from './pictures/bite.jpeg';
import chemisePapi from './pictures/chemisePapi.jpeg';
import { useEffect, useState } from 'react';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';
import ColorPicker from './ColorPicker';

const NewGarment = () => {
  const photo = chemisePapi;

  const [palette, setPalette] = useState<Palette>();
  useEffect(() => {
    Vibrant.from(photo)
      .getPalette()
      .then((palette) => setPalette(palette));
  }, [photo]);

  useEffect(() => {
    console.log(palette);
  }, [palette]);
  return (
    <>
      <img src={photo} />
      {palette !== undefined && <ColorPicker palette={palette} />}
    </>
  );
};

export default NewGarment;

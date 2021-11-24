import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import './App.css';
import { viewState } from './atoms';
import Nav from './Nav';
import NewGarment from './NewGarment';
import NewGarmentButton from './NewGarmentButton';

function App() {
  const view = useRecoilValue(viewState);

  const [imageData, setImageData] = useState<string>();

  return (
    <div className="App">
      {imageData === undefined ? (
        <>
          <NewGarmentButton onDone={setImageData} />
          <Nav />
          {view === 'outfits' && 'Outfits'}
          {view === 'collection' && 'Collection'}
        </>
      ) : (
        <NewGarment imageData={imageData} />
      )}
    </div>
  );
}

export default App;

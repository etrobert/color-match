import { useRecoilValue } from 'recoil';
import './App.css';
import { viewState } from './atoms';
import Nav from './Nav';

function App() {
  const view = useRecoilValue(viewState);

  return (
    <div className="App">
      <Nav />
      {view === 'newGarment' && 'New Garment'}
      {view === 'outfits' && 'Outfits'}
      {view === 'collection' && 'Collection'}
    </div>
  );
}

export default App;

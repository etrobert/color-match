import { useRecoilValue } from 'recoil';
import './App.css';
import { viewState } from './atoms';
import FeatherIcon from './FeatherIcon';
import Nav from './Nav';
import NewGarment from './NewGarment';
import NewGarmentButton from './NewGarmentButton';

function App() {
  const view = useRecoilValue(viewState);

  return (
    <div className="App">
      <NewGarmentButton />
      <Nav />
      {view === 'newGarment' && <NewGarment />}
      {view === 'outfits' && 'Outfits'}
      {view === 'collection' && 'Collection'}
    </div>
  );
}

export default App;

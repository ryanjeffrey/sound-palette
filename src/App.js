import { useContext } from 'react';
import './App.css';
import { ColorContext } from './ColorContext';
import { PaletteKeyboard } from './components/piano/PaletteKeyboard';

function App() {
  const { currentBackground } = useContext(ColorContext);

  // if (currentBackground.length === 1) {
  //   const single = currentBackground;
  // }

  return (
    <div className="App" style={{ background: `linear-gradient(${currentBackground.join(',')})` }}>
      <PaletteKeyboard />
    </div>
  );
}

export default App;

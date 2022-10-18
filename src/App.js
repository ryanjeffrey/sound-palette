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
    <div className="App" style={currentBackground.length < 2 ? { background: currentBackground[0] } : { background: `linear-gradient(90deg, ${currentBackground.join(',')})` }}>
      <PaletteKeyboard />
    </div>
  );
}

export default App;

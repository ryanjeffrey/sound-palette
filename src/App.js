import { useContext } from 'react';
import './App.css';
import { ColorContext } from './ColorContext';
import { PaletteKeyboard } from './components/piano/PaletteKeyboard';

function App() {
  const { currentBackground } = useContext(ColorContext);
  return (
    <div className="App" style={{ backgroundColor: currentBackground }}>
      <PaletteKeyboard />
    </div>
  );
}

export default App;

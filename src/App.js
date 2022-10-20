import { useCallback, useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { ColorContext } from './ColorContext';
import Header from './components/header/Header';
import { PaletteKeyboard } from './components/piano/PaletteKeyboard';
import About from './components/about/About';
import Select from './components/Select';
import Visualizer from './components/Visualizer';
import ColorPicker from './components/ColorPicker';
import { InstrumentContext } from './InstrumentContext';

function App() {
  const { currentBackground, keyboardPalette, setKeyboardPalette } = useContext(ColorContext);
  const { setNote, note } = useContext(InstrumentContext);
  

  const hotkey = useCallback(
    (e) => {
      if (e.key === 'z') {
        if (note > 1) {
          setNote((prevNote) => prevNote - 1);
          let newKeyboardPalette = {};
          for (let number in keyboardPalette) {
            newKeyboardPalette[Number(number) - 12] = keyboardPalette[number];
          }
          setKeyboardPalette(newKeyboardPalette);
        }
      }
      if (e.key === 'x') {
        if (note < 6) {
          setNote((prevNote) => prevNote + 1);
          let newKeyboardPalette = {};
          for (let number in keyboardPalette) {
            newKeyboardPalette[Number(number) + 12] = keyboardPalette[number];
          }
          setKeyboardPalette(newKeyboardPalette);
        }
      }
    },
    [note, setNote, keyboardPalette, setKeyboardPalette]
  );

  useEffect(() => {
    window.addEventListener('keydown', hotkey);
    return () => {
      window.removeEventListener('keydown', hotkey);
    };
  }, [hotkey]);

  return (
    <div
      className="App"
      style={
        currentBackground.length < 2
          ? { background: currentBackground[0] }
          : { background: `linear-gradient(90deg, ${currentBackground.join(',')})` }
      }
    >
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/">
          <Visualizer />
          <ColorPicker />
          <PaletteKeyboard />
          <button
            onClick={() => {
              if (note < 6) {
                setNote(note + 1);
                let newKeyboardPalette = {};
                for (let number in keyboardPalette) {
                  newKeyboardPalette[Number(number) + 12] = keyboardPalette[number];
                }
                setKeyboardPalette(newKeyboardPalette);
              }
            }}
          >
            Octave Up (Press x)
          </button>
          <button
            onClick={() => {
              if (note > 1) {
                setNote(note - 1);
                let newKeyboardPalette = {};
                for (let number in keyboardPalette) {
                  newKeyboardPalette[Number(number) - 12] = keyboardPalette[number];
                }
                setKeyboardPalette(newKeyboardPalette);
              }
            }}
          >
            Octave Down (Press z)
          </button>
          <Select />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { ColorContext } from './ColorContext';
import Header from './components/header/Header';
import { PaletteKeyboard } from './components/piano/PaletteKeyboard';
import About from './components/about/About';
import Select from './components/Select';
import Visualizer from './components/Visualizer';

function App() {
  const { currentBackground, keyboardPalette, setKeyboardPalette } = useContext(ColorContext);

  // if (currentBackground.length === 1) {
  //   const single = currentBackground;
  // }
  const colorKeyArray = Object.keys(keyboardPalette);

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
      <div className="color-div">
        {colorKeyArray.map((midiNumber, index) => {
          return <input key = {index} type = 'color' value={keyboardPalette[midiNumber]} onChange={(e) => {
            function makeNewKeyboardPalette() {
              let newKeyboardPalette = {};
              for (let key in keyboardPalette) {
                key === midiNumber ? newKeyboardPalette[key] = e.target.value : newKeyboardPalette[key] = keyboardPalette[key];
              }
              return newKeyboardPalette;
            }
            setKeyboardPalette(makeNewKeyboardPalette());

          }
          }    
        // this color picker has a specific midiNumber
        // the user has picked a new color e.target.value
        // we want to build a new object to set as keyboardPalette
        // it's the same as the old one, with current midiNumber set to color user picked

          />;
        
        })}
      </div>
      <Switch>
        <Route path="/visualizer" component={Visualizer} />
        <Route path="/about" component={About} />
        <Route path="/">
          {/* icon can go above the keyboard */}
          <PaletteKeyboard />
          <Select />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

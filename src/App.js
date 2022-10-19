import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { ColorContext } from './ColorContext';
import Header from './components/header/Header';
import { PaletteKeyboard } from './components/piano/PaletteKeyboard';
import About from './components/about/About';
import Select from './components/Select';
import Visualizer from './components/Visualizer';
import ColorPicker from './components/ColorPicker';

function App() {
  const { currentBackground, keyboardPalette } = useContext(ColorContext);
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
          <Select />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

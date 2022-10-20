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
import Octaves from './components/octaves/Octaves';
import Joyride from 'react-joyride';

function App() {
  const { currentBackground } = useContext(ColorContext);
  const steps = [
    {
      target: '.color-div',
      content: 'Here you can choose a different color for each piano key.',
    },
    {
      target: '.piano-wrapper',
      content: 'Use your QWERTY keyboard to play notes on the virtual piano.',
    },
    {
      target: '.octave-button-container',
      content: 'Use these buttons to set the note range for the keyboard.',
    },
    {
      target: '.select-wrap',
      content: 'Use this dropdown menu to select an instrument sound.',
    },
  ];
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
      <Joyride steps={steps} continuous={true} showSkipButton={true} showProgress={true} />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/">
          <Visualizer />
          <ColorPicker />
          <PaletteKeyboard />
          <Octaves />
          <Select />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

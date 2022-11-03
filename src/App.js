import { useContext, useState } from 'react';
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
import Joyride, { STATUS } from 'react-joyride';

function App() {
  const { currentBackground } = useContext(ColorContext);
  const steps = [
    {
      target: '.color-div',
      content: 'Welcome to Sound Palette, your synesthetic 3D playground! Here you can choose a different color for each piano key.',
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
    {
      target: '.leva-c-hBtFDW',
      content: 'Use this menu to control rotation, speed, size, and geometry of the 3D objects. Have fun!',
    },
  ];
  const [run, setRun] = useState(true);
  const handleJoyrideCallback = (data) => {
    const { status } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
    if (finishedStatuses.includes(status)) {
      setRun(false);
    }
  };
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
          <Joyride
            callback={handleJoyrideCallback}
            run={run}
            steps={steps}
            continuous={true}
            showSkipButton={true}
            showProgress={true}
          />
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

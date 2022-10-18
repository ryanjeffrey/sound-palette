import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { ColorContext } from './ColorContext';
import Header from './components/header/Header';
import { PaletteKeyboard } from './components/piano/PaletteKeyboard';
import About from './components/about/About';

function App() {
  const { currentBackground } = useContext(ColorContext);

  // if (currentBackground.length === 1) {
  //   const single = currentBackground;
  // }

  return (
    <div className="App" style={currentBackground.length < 2 ? { background: currentBackground[0] } : { background: `linear-gradient(90deg, ${currentBackground.join(',')})` }}>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={PaletteKeyboard} />
      </Switch>
    </div>
  );
}

export default App;

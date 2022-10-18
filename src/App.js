import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { ColorContext } from './ColorContext';
import Header from './components/header/Header';
import { PaletteKeyboard } from './components/piano/PaletteKeyboard';
import About from './components/about/About';

function App() {
  const { currentBackground } = useContext(ColorContext);
  return (
    <div className="App" style={{ backgroundColor: currentBackground }}>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/">
          <div className="keyboard" >
            <PaletteKeyboard />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

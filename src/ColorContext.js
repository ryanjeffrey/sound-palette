import { useState, createContext } from 'react';
import { midiToColor } from './color-data';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [currentBackground, setCurrentBackground] = useState([]);
  const [keyboardPalette, setKeyboardPalette] = useState(midiToColor);

  return (
    <ColorContext.Provider value={{ currentBackground, setCurrentBackground, keyboardPalette, setKeyboardPalette }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider, ColorContext };

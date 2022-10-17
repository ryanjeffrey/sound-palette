import { useState, createContext } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [currentBackground, setCurrentBackground] = useState('white');

  return <ColorContext.Provider value={{ currentBackground, setCurrentBackground }}>
    {children}
  </ColorContext.Provider>;
};

export { ColorProvider, ColorContext };
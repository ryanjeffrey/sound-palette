import { useState, createContext } from 'react';

const InstrumentContext = createContext();

const InstrumentProvider = ({ children }) => {
  const [instrument, setInstrument] = useState('acoustic_grand_piano');

  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </InstrumentContext.Provider>
  );
};

export { InstrumentProvider, InstrumentContext };

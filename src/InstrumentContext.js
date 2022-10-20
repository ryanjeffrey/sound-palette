import { useState, createContext } from 'react';

const InstrumentContext = createContext();

const InstrumentProvider = ({ children }) => {
  const [instrument, setInstrument] = useState('acoustic_grand_piano');
  const [note, setNote] = useState(3);

  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument, note, setNote }}>
      {children}
    </InstrumentContext.Provider>
  );
};

export { InstrumentProvider, InstrumentContext };

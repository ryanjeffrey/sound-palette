import { useCallback, useContext, useEffect } from 'react';
import { ColorContext } from '../../ColorContext';
import { InstrumentContext } from '../../InstrumentContext';
import './Octaves.css';

export default function Octaves() {
  const { keyboardPalette, setKeyboardPalette } = useContext(ColorContext);
  const { setNote, note } = useContext(InstrumentContext);

  const hotkey = useCallback(
    (e) => {
      if (e.key === 'z') {
        if (note > 1) {
          setNote((prevNote) => prevNote - 1);
          let newKeyboardPalette = {};
          for (let number in keyboardPalette) {
            newKeyboardPalette[Number(number) - 12] = keyboardPalette[number];
          }
          setKeyboardPalette(newKeyboardPalette);
        }
      }
      if (e.key === '/') {
        if (note < 6) {
          setNote((prevNote) => prevNote + 1);
          let newKeyboardPalette = {};
          for (let number in keyboardPalette) {
            newKeyboardPalette[Number(number) + 12] = keyboardPalette[number];
          }
          setKeyboardPalette(newKeyboardPalette);
        }
      }
    },
    [note, setNote, keyboardPalette, setKeyboardPalette]
  );

  useEffect(() => {
    window.addEventListener('keydown', hotkey);
    return () => {
      window.removeEventListener('keydown', hotkey);
    };
  }, [hotkey]);
  return (
    <div className="octave-button-container">
      <button
        className="octave-button"
        onClick={() => {
          if (note > 1) {
            setNote(note - 1);
            let newKeyboardPalette = {};
            for (let number in keyboardPalette) {
              newKeyboardPalette[Number(number) - 12] = keyboardPalette[number];
            }
            setKeyboardPalette(newKeyboardPalette);
          }
        }}
      >
        Octave 🔽 (&apos;Z&apos; Key)
      </button>
      <div className="octave-display-container">
        <div>Range</div>
        <div className="range">
          C{note}-F{Number(note) + 1}
        </div>
      </div>
      <button
        className="octave-button"
        onClick={() => {
          if (note < 6) {
            setNote(note + 1);
            let newKeyboardPalette = {};
            for (let number in keyboardPalette) {
              newKeyboardPalette[Number(number) + 12] = keyboardPalette[number];
            }
            setKeyboardPalette(newKeyboardPalette);
          }
        }}
      >
        Octave 🔼 (&apos;/&apos; Key)
      </button>
    </div>
  );
}

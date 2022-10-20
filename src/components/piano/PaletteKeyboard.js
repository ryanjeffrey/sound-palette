import { useContext } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import { ColorContext } from '../../ColorContext';
import { InstrumentContext } from '../../InstrumentContext';
import SoundfontProvider from '../SoundfontProvider';

import './PaletteKeyboard.css';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

export function PaletteKeyboard() {
  const { instrument, note } = useContext(InstrumentContext);
  const noteRange = {
    first: MidiNumbers.fromNote(`c${note}`),
    last: MidiNumbers.fromNote(`f${note + 1}`),
  };
  const { setCurrentBackground } = useContext(ColorContext);
  const firstNote = MidiNumbers.fromNote(`c${note}`);
  const lastNote = MidiNumbers.fromNote(`f${note + 1}`);
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  return (
    <div className="piano-wrapper">
      <SoundfontProvider
        keyboardShortcuts={keyboardShortcuts}
        noteRange={noteRange}
        instrumentName={instrument}
        audioContext={audioContext}
        hostname={soundfontHostname}
        setCurrentBackground={setCurrentBackground}
        render={({ isLoading, playNote, stopNote }) => (
          <Piano
            noteRange={noteRange}
            width={300}
            playNote={playNote}
            stopNote={stopNote}
            disabled={isLoading}
            keyboardShortcuts={keyboardShortcuts}
          />
        )}
      />
    </div>
  );
}

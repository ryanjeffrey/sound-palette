// See https://github.com/danigb/soundfont-player
// for more documentation on prop options.
import React, { useContext, useEffect, useState } from 'react';
import Soundfont from 'soundfont-player';
import { Piano } from 'react-piano';
import { ColorContext } from '../ColorContext';

export default function SoundfontProvider({
  instrumentName = '',
  audioContext,
  format = 'mp3',
  soundfont = 'MusyngKite',
  hostname,
  noteRange,
  keyboardShortcuts,
}) {
  const { currentBackground, setCurrentBackground, keyboardPalette } = useContext(ColorContext);
  const [activeAudioNodes, setActiveAudioNodes] = useState({});
  const [instrument, setInstrument] = useState(null);
  useEffect(() => {
    setInstrument(null);
    Soundfont.instrument(audioContext, instrumentName, {
      format: format,
      soundfont: soundfont,
      nameToUrl: (name, soundfont, format) => {
        return `${hostname}/${soundfont}/${name}-${format}.js`;
      },
    }).then((instrument) => {
      setInstrument(instrument);
    });
  }, [instrumentName, audioContext, format, soundfont, hostname]);

  const playNote = (midiNumber) => {
    audioContext.resume().then(() => {
      const audioNode = instrument.play(midiNumber);
      setCurrentBackground([...currentBackground, keyboardPalette[midiNumber]]);
      setActiveAudioNodes((prevState) => {
        return { ...prevState, [midiNumber]: audioNode };
      });
    });
  };

  const stopNote = (midiNumber) => {
    audioContext.resume().then(() => {
      if (!activeAudioNodes[midiNumber]) {
        return;
      }
      const audioNode = activeAudioNodes[midiNumber];
      setCurrentBackground((prevArray) =>
        prevArray.filter((color) => {
          return color !== keyboardPalette[midiNumber];
        })
      );
      setActiveAudioNodes((prevState) => {
        return { ...prevState, [midiNumber]: null };
      });
      audioNode.stop();
    });
  };

  return (
    <Piano
      noteRange={noteRange}
      width={300}
      playNote={playNote}
      stopNote={stopNote}
      disabled={!instrument}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
}

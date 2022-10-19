import { useContext } from 'react';
import { ColorContext } from '../ColorContext';

import './ColorPicker.css';

export default function ColorPicker() {
  const { keyboardPalette, setKeyboardPalette } = useContext(ColorContext);
  const colorKeyArray = Object.keys(keyboardPalette);

  return (
    <div className="color-div">
      {colorKeyArray.map((midiNumber, index) => {
        return (
          <input
            key={index}
            type="color"
            value={keyboardPalette[midiNumber]}
            onChange={(e) => {
              function makeNewKeyboardPalette() {
                let newKeyboardPalette = {};
                for (let key in keyboardPalette) {
                  key === midiNumber
                    ? (newKeyboardPalette[key] = e.target.value)
                    : (newKeyboardPalette[key] = keyboardPalette[key]);
                }
                return newKeyboardPalette;
              }
              setKeyboardPalette(makeNewKeyboardPalette());
            }}
            // this color picker has a specific midiNumber
            // the user has picked a new color e.target.value
            // we want to build a new object to set as keyboardPalette
            // it's the same as the old one, with current midiNumber set to color user picked
          />
        );
      })}
    </div>
  );
}

// See https://github.com/danigb/soundfont-player
// for more documentation on prop options.
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Soundfont from 'soundfont-player';
import { midiToColor } from '../color-data';
import { Piano } from 'react-piano';

export default function SoundfontProvider({ instrumentName = 'acoustic_grand_piano', audioContext, format = 'mp3', soundfont = 'MusyngKite', hostname, setCurrentBackground, noteRange, keyboardShortcuts }) {
  const [activeAudioNodes, setActiveAudioNodes] = useState({});
  const [instrument, setInstrument] = useState(null);
  // format: 'mp3',
//     soundfont: 'MusyngKite',
//     instrumentName: 'acoustic_grand_piano',
  useEffect(() => {
    loadInstrument(instrumentName);
  }, [instrumentName]);
  
  const loadInstrument = (instrumentName) => {
    // Re-trigger loading state
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
  };

  const playNote = (midiNumber) => {
    audioContext.resume().then(() => {
      const audioNode = instrument.play(midiNumber);
      console.log(midiToColor[midiNumber]);
      console.log(midiNumber);
      setCurrentBackground(midiToColor[midiNumber]);
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
      audioNode.stop();
      setActiveAudioNodes((prevState) => {
        return { ...prevState, [midiNumber]: null };
      });
    });
  };

  const stopAllNotes = () => {
    audioContext.resume().then(() => {
      const activeAudioNodes = Object.values(activeAudioNodes);
      activeAudioNodes.forEach((node) => {
        if (node) {
          node.stop();
        }
      });
      setActiveAudioNodes({});
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

// class SoundfontProvider extends React.Component {
  
  
//   static propTypes = {
//     instrumentName: PropTypes.string.isRequired,
//     hostname: PropTypes.string.isRequired,
//     format: PropTypes.oneOf(['mp3', 'ogg']),
//     soundfont: PropTypes.oneOf(['MusyngKite', 'FluidR3_GM']),
//     audioContext: PropTypes.instanceOf(window.AudioContext),
//     render: PropTypes.func,
//   };

//   static defaultProps = {
//     format: 'mp3',
//     soundfont: 'MusyngKite',
//     instrumentName: 'acoustic_grand_piano',
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       activeAudioNodes: {},
//       instrument: null,
//     };
//   }

//   componentDidMount() {
//     this.loadInstrument(this.props.instrumentName);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.instrumentName !== this.props.instrumentName) {
//       this.loadInstrument(this.props.instrumentName);
//     }
//   }

//   // loadInstrument = (instrumentName) => {
//   //   // Re-trigger loading state
//   //   this.setState({
//   //     instrument: null,
//   //   });
//   //   Soundfont.instrument(this.props.audioContext, instrumentName, {
//   //     format: this.props.format,
//   //     soundfont: this.props.soundfont,
//   //     nameToUrl: (name, soundfont, format) => {
//   //       return `${this.props.hostname}/${soundfont}/${name}-${format}.js`;
//   //     },
//   //   }).then((instrument) => {
//   //     this.setState({
//   //       instrument,
//   //     });
//   //   });
//   // };

// //  playNote = (midiNumber) => {
// //     this.props.audioContext.resume().then(() => {
// //        const audioNode = this.state.instrument.play(midiNumber);
// //       console.log(midiToColor[midiNumber]);
// //       console.log(midiNumber);
// //       this.props.setCurrentBackground(midiToColor[midiNumber]);
// //       this.setState({
// //         activeAudioNodes: Object.assign({}, this.state.activeAudioNodes, {
// //           [midiNumber]: audioNode,
// //         }),
// //       });
// //     });
// //   };

//   // stopNote = (midiNumber) => {
//   //   this.props.audioContext.resume().then(() => {
//   //     if (!this.state.activeAudioNodes[midiNumber]) {
//   //       return;
//   //     }
//   //     const audioNode = this.state.activeAudioNodes[midiNumber];
//   //     audioNode.stop();
//   //     this.setState({
//   //       activeAudioNodes: Object.assign({}, this.state.activeAudioNodes, {
//   //         [midiNumber]: null,
//   //       }),
//   //     });
//   //   });
//   // };

//   // Clear any residual notes that don't get called with stopNote
//   // stopAllNotes = () => {
//   //   this.props.audioContext.resume().then(() => {
//   //     const activeAudioNodes = Object.values(this.state.activeAudioNodes);
//   //     activeAudioNodes.forEach((node) => {
//   //       if (node) {
//   //         node.stop();
//   //       }
//   //     });
//   //     this.setState({
//   //       activeAudioNodes: {},
//   //     });
//   //   });
//   // };

  
//   render() {
//     return this.props.render({
//       isLoading: !this.state.instrument,
//       playNote: this.playNote,
//       stopNote: this.stopNote,
//       stopAllNotes: this.stopAllNotes,
//     });
//   }
// }

// export default SoundfontProvider;



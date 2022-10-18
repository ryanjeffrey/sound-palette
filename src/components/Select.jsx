import { useContext } from 'react';
// import { instrument } from 'soundfont-player';
import { InstrumentContext } from '../InstrumentContext';
// instrument
function Select() {
  const { setInstrument, instrument } = useContext(InstrumentContext);
  console.log(instrument);
  //clickhandler to set the e.target.value

  const soundHandler = (e) => {
    setInstrument(e.target.value);
    const select = document.getElementById('select');
    select.blur();
  };

  //select.blur to deselect the dropdown
  return (
    <div>
      <select id="select" value={instrument} onChange={soundHandler}>
        <option value="accordion">accordion</option>
        <option value="acoustic_bass">acoustic bass</option>
        <option value="acoustic_grand_piano">acoustic grand piano</option>
        <option value="acoustic_guitar_nylon">nylon acoustic guitar</option>
        <option value="acoustic_guitar_steel">steel acoustic guitar</option>
        <option value="agogo">agogo</option>
        <option value="alto_sax">alto sax</option>
        <option value="applause">applause</option>
        <option value="bagpipe">bagpipe</option>
        <option value="banjo">banjo</option>
        <option value="baritone_sax">baritone sax</option>
        <option value="bassoon">bassoon</option>
        <option value="bird_tweet">bird tweet</option>
        <option value="blown_bottle">blown bottle</option>
        <option value="brass_section">brass section</option>
        <option value="breath_noise">breath noise</option>
        <option value="bright_acoustic_piano">bright acoustic piano</option>
        <option value="celesta">celesta</option>
        <option value="cello">cello</option>
        <option value="choir_aahs">choir aahs</option>
        <option value="church_organ">church organ</option>
        <option value="clarinet">clarinet</option>
        <option value="clavinet">clavinet</option>
        <option value="contrabass">contrabass</option>
        <option value="distortion_guitar">distortion guitar</option>
        <option value="drawbar_organ">drawbar organ</option>
        <option value="dulcimer">dulcimer</option>
        <option value="electric_bass_finger">electric bass finger</option>
        <option value="electric_bass_pick">electric bass pick</option>
        <option value="electric_grand_piano">electric grand piano</option>
        <option value="electric_guitar_clean">electric guitar clean</option>
        <option value="electric_guitar_jazz">electric guitar jazz</option>
        <option value="electric_guitar_muted">electric guitar muted</option>
        <option value="electric_piano_1">electric piano 1</option>
        <option value="electric_piano_2">electric piano 2</option>
        <option value="english_horn">english horn</option>
        <option value="fiddle">fiddle</option>
        <option value="flute">flute</option>
        <option value="french_horn">french horn</option>
        <option value="fretless_bass">fretless bass</option>
        <option value="fx_1_rain">fx 1: rain</option>
        <option value="fx_2_soundtrack">fx 2: soundtrack</option>
        <option value="fx_3_crystal">fx 3: crystal</option>
        <option value="fx_4_atmosphere">fx 4: atmosphere</option>
        <option value="fx_5_brightness">fx 5: brightness</option>
        <option value="fx_6_goblins">fx 6: goblins</option>
        <option value="fx_7_echoes">fx 7: echoes</option>
        <option value="fx_8_scifi">fx 8: sci-fi</option>
        <option value="glockenspiel">glockenspiel</option>
        <option value="guitar_fret_noise">guitar fret noise</option>
        <option value="guitar_harmonics">guitar harmonics</option>
        <option value="gunshot">gunshot</option>
        <option value="harmonica">harmonica</option>
        <option value="harpsichord">harpsichord</option>
        <option value="helicopter">helicopter</option>
        <option value="honkytonk_piano">honkytonk piano</option>
        <option value="kalimba">kalimba</option>
        <option value="koto">koto</option>
        <option value="lead_1_square">lead 1: square</option>
        <option value="lead_2_sawtooth">lead 2: sawtooth</option>
        <option value="lead_3_calliope">lead 3: calliope</option>
        <option value="lead_4_chiff">lead 4: chiff</option>
        <option value="lead_5_charang">lead 5: charang</option>
        <option value="lead_6_voice">lead 6: voice</option>
        <option value="lead_7_fifths">lead 7: fifths</option>
        <option value="lead_8_bass__lead">lead 8: bass lead</option>
        <option value="marimba">marimba</option>
        <option value="melodic_tom">melodic tom</option>
        <option value="music_box">music box</option>
        <option value="muted_trumpet">muted trumpet</option>
        <option value="oboe">oboe</option>
        <option value="ocarina">ocarina</option>
        <option value="orchestra_hit">orchestra hit</option>
        <option value="orchestral_harp">orchestral harp</option>
        <option value="overdriven_guitar">overdriven guitar</option>
        <option value="pad_1_new_age">pad 1: new age</option>
        <option value="pad_2_warm">pad 2: warm</option>
        <option value="pad_3_polysynth">pad 3: polysynth</option>
        <option value="pad_4_choir">pad 4: choir</option>
        <option value="pad_5_bowed">pad 5: bowed</option>
        <option value="pad_6_metallic">pad 6: metallic</option>
        <option value="pad_7_halo">pad 7: halo</option>
        <option value="pad_8_sweep">pad 8: sweep</option>
        <option value="pan_flute">pan flute</option>
        <option value="percussive_organ">percussive organ</option>
        <option value="piccolo">piccolo</option>
        <option value="pizzicato_strings">pizzicato strings</option>
        <option value="recorder">recorder</option>
        <option value="reed_organ">reed organ</option>
        <option value="reverse_cymbal">reverse cymbal</option>
        <option value="rock_organ">rock organ</option>
        <option value="seashore">seashore</option>
        <option value="shakuhachi">shakuhachi</option>
        <option value="shamisen">shamisen</option>
        <option value="shanai">shanai</option>
        <option value="sitar">sitar</option>
        <option value="slap_bass_1">slap bass 1</option>
        <option value="slap_bass_2">slap bass 2</option>
        <option value="soprano_sax">soprano sax</option>
        <option value="steel_drums">steel drums</option>
        <option value="string_ensemble_1">string ensemble 1</option>
        <option value="string_ensemble_2">string ensemble 2</option>
        <option value="synth_bass_1">synth bass 1</option>
        <option value="synth_bass_2">synth bass 2</option>
        <option value="synth_brass_1">synth brass 1</option>
        <option value="synth_brass_2">synth brass 2</option>
        <option value="synth_choir">synth choir</option>
        <option value="synth_drum">synth drum</option>
        <option value="synth_strings_1">synth strings 1</option>
        <option value="synth_strings_2">synth strings 2</option>
        <option value="taiko_drum">taiko drum</option>
        <option value="tango_accordion">tango accordion</option>
        <option value="telephone_ring">telephone ring</option>
        <option value="tenor_sax">tenor sax</option>
        <option value="timpani">timpani</option>
        <option value="tinkle_bell">tinkle bell</option>
        <option value="tremolo_strings">tremolo strings</option>
        <option value="trombone">trombone</option>
        <option value="trumpet">trumpet</option>
        <option value="tuba">tuba</option>
        <option value="tubular_bells">tubular bells</option>
        <option value="vibraphone">vibraphone</option>
        <option value="viola">viola</option>
        <option value="violin">violin</option>
        <option value="voice_oohs">voice oohs</option>
        <option value="whistle">whistle</option>
        <option value="woodblock">woodblock</option>
        <option value="xylophone">xylophone</option>
      </select>
    </div>
  );
}

export default Select;

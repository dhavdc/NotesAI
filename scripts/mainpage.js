//Test - simple playing
//MidiParser.parse('rac');
//var yeet = mm.midiToSequenceProto('rac');
//console.log('Mo_Bamba_Piano.mid');
// var reader = new FileReader();

// reader.onload = function(e) {
//   var rawData = reader.result;
// };

// reader.readAsBinaryString("rac.mid");
// var binary = FileReader.readAsBinaryString("rac.mid");
// var parsedMidi = MidiConvert.parse("rac.mid");
// console.log(parsedMidi);
//mm.midiToSequenceProto("rac");

// var player = new mm.Player();
var player = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');

var viz;
var vizPlayer;
// music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_16bar_small_q2');
// music_vae.initialize();
//var vaePlayer = new mm.Player();

//Twinkle Twinkle Little Star

const PIECE1 = {
  notes: [{
      instrument: 5,
      pitch: 60,
      startTime: 0.0,
      endTime: 0.5
    },
    {
      pitch: 60,
      startTime: 0.5,
      endTime: 1.0
    },
    {
      pitch: 67,
      startTime: 1.0,
      endTime: 1.5
    },
    {
      pitch: 67,
      startTime: 1.5,
      endTime: 2.0
    },
    {
      pitch: 69,
      startTime: 2.0,
      endTime: 2.5
    },
    {
      pitch: 69,
      startTime: 2.5,
      endTime: 3.0
    },
    {
      pitch: 67,
      startTime: 3.0,
      endTime: 4.0
    },
    {
      pitch: 65,
      startTime: 4.0,
      endTime: 4.5
    },
    {
      pitch: 65,
      startTime: 4.5,
      endTime: 5.0
    },
    {
      pitch: 64,
      startTime: 5.0,
      endTime: 5.5
    },
    {
      pitch: 64,
      startTime: 5.5,
      endTime: 6.0
    },
    {
      pitch: 62,
      startTime: 6.0,
      endTime: 6.5
    },
    {
      pitch: 62,
      startTime: 6.5,
      endTime: 7.0
    },
    {
      pitch: 60,
      startTime: 7.0,
      endTime: 8.0
    },
  ],
  totalTime: 8
};


// PIECE2 = {
//   notes: piece2,
//   totalTime: 8
// };

//Mary had a little Lamb
const PIECE2 = {
  notes: piece3,
  totalTime: 19.139375
};


const PIECE3 = {
  notes: piece4,
  totalTime: 198
};

const PIECE4 = {
  notes: piece5,
  totalTime: 13.392843749999995
};

//console.log(SAMPLE_MIDI_ARRAY);
//var quant = mm.quantizeNoteSequence(PIECE1,4);
//console.log(quant);
//mm.quantizeNoteSequence(PIECE1,4);
//music_vae.quantizeNoteSequence();
//Player.quantizeNoteSequence();
//vaePlayer.quantizeNoteSequence();
//var yeet = mm.quantizeNoteSequence();


var interpolated;

let config = {
  noteHeight: 10,
  pixelsPerTimeStep: 5, // like a note width
  noteSpacing: 10,
  noteRGB: '8, 41, 64',
  activeNoteRGB: '240, 84, 119',
};

// let loader = document.getElementByClassName("loader");

music_rnn = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/melody_rnn');
music_rnn.initialize();
var vizPlayer = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus',undefined,undefined,undefined, {
    run: (note) => viz.redraw(note),
    stop: () => {
        console.log('done');
    }
});
var rnn_steps = 90;
  console.log(slider.value);

var qns = mm.sequences.quantizeNoteSequence(PIECE1, 4);
$(".btn-play").click(function () {
  console.log(qns);
  //player.start(TWINKLE_TWINKLE);
  // loader.classList.add("displayloader");

 

  // Create a player to play the sequence we'll get from the model.
  var rnnPlayer = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');
  
  
  console.log(slider.value);


  function play() {
    $('.btn-play').text("Stop");
    if (vizPlayer.isPlaying()) {
      console.log("Playing");
      vizPlayer.stop();
      $('.btn-play').text("Play");
      $('.consoleText2').text("Status: Stopped");
      return;
    }
    $('.consoleText2').text("Status: Playing");
    var rnn_temperature = parseInt(slider.value);
    // The model expects a quantized sequence, and ours was unquantized:
    music_rnn
      .continueSequence(qns, rnn_steps, rnn_temperature)
      .then(function(sample){
        viz = new mm.Visualizer(sample, document.getElementById('noteviz'),config);
        vizPlayer.start(sample);
      });
  }
  play();



  // function playInterpolation() {
  //   if (vaePlayer.isPlaying()) {
  //     vaePlayer.stop();
  //     return;
  //   }

  //   music_vae
  //   .interpolate([quantize1, quantize2], 2)
  //   .then(function(sample){
  //       //vaePlayer.start(sample[0]);
  //       viz = new mm.Visualizer(sample[0], document.getElementById('noteviz'),config);
  //       vizPlayer = new mm.Player(false, {
  //           run: (note) => viz.redraw(note),
  //           stop: () => {
  //               console.log('done');
  //           }
  //       });
  //       vizPlayer.start(sample[0]);
  //       console.log(sample);
  //   });        
  // }

  // playInterpolation();

  //  viz = new mm.Visualizer(PIECE1, document.getElementById('noteviz'));

  //   vizPlayer = new mm.Player(false, {
  //       run: (note) => viz.redraw(note),
  //       stop: () => {
  //           console.log('done');
  //       }
  //   });
  //   //playInterpolation();

  //  player.start(quantize1);
  //vizPlayer.start(SAMPLE_MIDI_ARRAY);

});
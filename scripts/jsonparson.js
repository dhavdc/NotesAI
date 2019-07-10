let notePitchArray = [];
let noteStartArray = [];
let noteEndArray = [];
console.log(piece);
let duration = piece.duration;
console.log(duration);
let noteArrayLength = piece.tracks[1].notes.length;
//console.log(noteArrayLength);
for (let i=0; i < noteArrayLength; i++ ){
    notePitchArray.push(piece.tracks[1].notes[i].midi);
    noteStartArray.push(piece.tracks[1].notes[i].time);
    var EndTimeAdd = piece.tracks[1].notes[i].time + piece.tracks[1].notes[i].duration;
    noteEndArray.push(EndTimeAdd);
}

// console.log(notePitchArray);
// console.log(noteStartArray);
// console.log(noteEndArray);
// console.log(piece.tracks[1].notes[0].midi);

let finalArray = [];

for (let i=0; i < noteArrayLength; i++){
    let objIteration = {pitch: notePitchArray[i], startTime: noteStartArray[i], endTime: noteEndArray[i]};
    finalArray.push(objIteration);
}
console.log(JSON.stringify(finalArray));





//Sample array which we need to convert to - UNQUANITIZED


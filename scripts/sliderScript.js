var slider = document.getElementById('myRange');
var output = document.getElementById('sliderNumber');
console.log(output);
console.log(slider.value);
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
};

$(document).ready(function() {
    $("h2").click(function(event) {
        var id = event.target.id;
        console.log(id);
        var idString = '#' + id.toString();
        $('h2').removeClass('songSelectionSelectedColor');
        $(idString).addClass('songSelectionSelectedColor');
        $('.consoleText').text("Song is set to " + $(idString).text() );

        switch (Number(id)){
            case 1: 
            console.log("SWITCHED TO ONE")
            qns = mm.sequences.quantizeNoteSequence(PIECE1, 4);
            break;
            case 2: 
            qns = mm.sequences.quantizeNoteSequence(PIECE2, 4);
            console.log("SWITCHED TO TWO")
            break;
        }
    });
});

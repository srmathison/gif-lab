

// $(document).ready(function(){

function myFunction() {
    console.log("You pressed a key inside the input field");
    
    // step 1. user inputs first character for userInput in myText
    var userInput = document.getElementById("myText").value;

    // step 2. on key press grab getElementById to display on canvas
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.font = "15px Arial";
    context.fillText(userInput, 0, 10);
  };

// });






// step 3. after each key press a snapshot is taken of div
// var image = canvas.toDataURL("image/png");
   


// other helpful info
    // When the user clicks "Capture", do this:
    // window.open('', document.getElementById('the_canvas_element_id').toDataURL());


    // with the value in IMG you can write it out as a new Image like so:
    // document.write('<img src="'+img+'"/>');





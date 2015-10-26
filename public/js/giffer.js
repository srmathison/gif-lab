// array to store images
var myArray = [];

// captures photo on keyup
$(document).ready(function(){
  $('#myText').on("keyup", function(e){
    myFunction();
    myOtherFunction();
  });
});

// draws photo to canvas
function myFunction() {
    var userInput = document.getElementById("myText").value;
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.font = "50px Arial";
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width, canvas.height); //GIF can't do transparent so do white
    context.fillStyle = "white";
    // context.fillText(userInput, 50, 100);
    CanvasTextWrapper(canvas, userInput, {
        verticalAlign: "top",
        allowNewLine: true,
        lineHeight: "100%",
        paddingX: 20,
        paddingY: 20,
        });
    // converts image to png
    var image = canvas.toDataURL("image/png");
    // adds image to end of array
    myArray.push(image);
    console.log(new Date());
    
  };

// clears canvas in between photos
function myOtherFunction() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);   
};

// converts to gif 
function submit() {
    // loading while gif is being made
    $('body').append("<div class='loading'></div>")
    // sends array to ImageMagick on app.rb
    $.post( "http://localhost:4567/gif", {data: myArray}, function( data ) {
        // removes loading
        $('.loading').remove();
        // returns gif to user in html
        $( ".result" ).html( "<img src='" + data + "'>" );
        });
};

// refresh page to make new gif
function gifRefresh() {
   window.location.reload();
}





  








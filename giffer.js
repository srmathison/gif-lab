var myArray = [];

$(document).ready(function(){
  $('#myText').on("keyup", function(e){
    myFunction();
    myOtherFunction();
  });
});

function myFunction() {
    var userInput = document.getElementById("myText").value;
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.font = "30px Arial";
    // context.fillText(userInput, 50, 100);
    CanvasTextWrapper(canvas, userInput, {
        verticalAlign: "bottom",
        allowNewLine: true,
        lineHeight: "100%",
        paddingX: 20,
        paddingY: 20,
        });
    var image = canvas.toDataURL("image/png");
    // console.log('<img src="'+image+'"/>');

    myArray.push(image);
    console.log(myArray);
    
  };

function myOtherFunction() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);   
};

function submit() {
    $.post( "http://localhost:9292/gif", {data: myArray}, function( data ) {
        $( ".result" ).html( data );
        });
};





   









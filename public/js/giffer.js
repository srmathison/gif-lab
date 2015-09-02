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
    context.font = "50px Arial";
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width, canvas.height); //GIF can't do transparent so do white
    context.fillStyle = "white";
    context.fillStyle = "white";
    // context.fillText(userInput, 50, 100);
    CanvasTextWrapper(canvas, userInput, {
        verticalAlign: "top",
        allowNewLine: true,
        lineHeight: "100%",
        paddingX: 20,
        paddingY: 20,
        });
    var image = canvas.toDataURL("image/png");
    // console.log('<img src="'+image+'"/>');
    myArray.push(image);
    console.log(image);
    
  };

function myOtherFunction() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);   
};

function submit() {
    $.post( "http://localhost:9292/gif", {data: myArray}, function( data ) {
        //debugger
        $( ".result" ).html( "<img src='" + data + "'>" );
        });
};





  








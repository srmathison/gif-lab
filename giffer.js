

$(document).ready(function(){
  $('#myText').on("keyup", function(e){
    myFunction(e);
    myOtherFunction();
  });
});

function myFunction(e) {
    var userInput = document.getElementById("myText").value;
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.font = "30px Arial";
    var lineHeight = 50;
    if( e.keyCode == '13' ){
        console.log("enter key pressed");
        context.fillText(userInput, 0, lineHeight+=50);
    } else {
        context.fillText(userInput, 0, lineHeight);
    }
    var image = canvas.toDataURL("image/png");
    console.log('<img src="'+image+'"/>');
  };

function myOtherFunction() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);   
}










   









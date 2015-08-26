var showMeStuff = [];
// var textHolder;
$(document).ready(function() {
var Playback = {
    //store the time an action occured and the resulting state in an object
    //don't use an array because they are not sparce - interstitial keys
    //will have to be iterated over
    record: {},
    init: function( recorderId, playbackId ) {
        this.recorder = document.getElementById( recorderId );
        this.playback = document.getElementById( playbackId );

        this.recorder.addEventListener( 'focus', function() {
            Playback.record = {};
            this.value = '';
        }, false );
        
        this.recorder.addEventListener( 'keyup', function( e ) {
            Playback.record[ (new Date()).getTime() ] = this.value;
            var chr = String.fromCharCode(e.keyCode)
            showMeStuff.push(chr);
            myFunction();
            // textHolder = this.value;
        }, false );

        this.recorder.addEventListener( 'blur', function( e ) {
            Playback.playback.value = '';
            //store the time the sequence started
            //so that we can subtract it from subsequent actions
            var mark = null;
            for( var t in  Playback.record ) {
                if( mark ) {
                    var timeout = t - mark;
                } else {
                    var timeout = 0;
                    mark = t;
                }
                // We need to create a callback which closes over the value of t
                // because t would have changed by the time this is run
                setTimeout( Playback.changeValueCallback( Playback.record[t] ), timeout );
            }
        }, false ); 
    },

    changeValueCallback: function( val ) {
        return function() { Playback.playback.value = val }
    }
    
}

function myFunction () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "15px Arial";
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(Playback.record);
    ctx.fillText(showMeStuff.join(''), 0, 10);
}

Playback.init( 'recorder', 'playback' );
});





// function myFunction() {
//         var x = document.getElementById("recorder").value;
//         document.getElementById("mycanvas").innerHTML = x;
//         var canvas = document.getElementById("mycanvas");
//         var ctx = canvas.getContext("2d");
//         ctx.font = "30px Arial";
//         ctx.fillText("##",10,50);
//         var img = canvas.toDataURL("image/png");
//         document.write('<img src="'+img+'"/>');
        
//     }
//

/* then use the canvas 2D drawing functions to add text, etc. for the result */

// window.open('', document.getElementById("recorder").toDataURL());

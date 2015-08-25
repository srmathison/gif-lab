$(document).ready(function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var Playback = {
    //store the time an action occured and the resulting state in an object
    //don't use an array because they are not sparce - interstitial keys
    //will have to be iterated over
    record: [],
    init: function( recorderId, playbackId ) {
      this.recorder = document.getElementById( recorderId );
      this.playback = document.getElementById( playbackId );

      this.recorder.addEventListener( 'focus', function() {
        Playback.record = [];
        this.value = '';
      }, false );

      this.recorder.addEventListener( 'keyup', function( e ) {

        logEntry = {time: (new Date()).getTime(),
          val: this.value };

        Playback.record.push(logEntry);
      }, false );
    }
  }


function myFunction () {
  ctx.font = "30px Arial";
  ctx.save();
  start = _.first(Playback.record).time;

  newLog = _.map(Playback.record, function(logEntry) {
    return { delay: logEntry.time - start,
             val: logEntry.val }
  });

  _.each(newLog, function(logEntry) {
    setTimeout(frame(logEntry.val), logEntry.delay)
  });
}

function frame(val){
  return function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(val, 10, 50);
  }
}

Playback.init( 'recorder', 'playback' );

$('#playback').click(myFunction);

});


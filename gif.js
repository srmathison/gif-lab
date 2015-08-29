$(document).ready(function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var Playback = {
    //store the time an action occured and the resulting state in an object
    //don't use an array because they are not sparce - interstitial keys
    //will have to be iterated over
    record: [],
    returns: [],
    init: function( recorderId, playbackId ) {
      this.recorder = document.getElementById( recorderId );
      this.playback = document.getElementById( playbackId );

      this.recorder.addEventListener( 'focus', function() {
        Playback.record = [];
        this.value = '';
      }, false );

      this.recorder.addEventListener( 'keyup', function( e ) {

        if (e.which == 13){
          Playback.returns.push(this.value.length - 1);
        }
        logEntry = {time: (new Date()).getTime(),
          val: this.value };

        Playback.record.push(logEntry);
      }, false );
    }
  }


function myFunction () {
  ctx.font = "24px Arial";
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
    console.log(Playback.returns[0])
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (val.length > Playback.returns[0]){
      v1 = val.slice(0, Playback.returns[0])
      v2 = val.slice(Playback.returns[0], val.length);
      ctx.fillText(v1, 10, 50);
      ctx.fillText(v2.trim(), 10, 80);
    } else {
      ctx.fillText(val, 10, 50);
    }
  }
}

Playback.init( 'recorder', 'playback' );

$('#playback').click(myFunction);

});


$(function() {
  var aa = new AudioAnalyzer("https://dancepartyjukebox.now.sh/mp3s/xoxo-813.mp3", function() {
      var that = this;
    
      //mic handler
      $('#mic').on('click', function(){
        if (!that.isMicOn) {
          $(this).text('Stop Mic');
          that.startMic();
        } else {
          $(this).text('Start Mic');
          that.stopMic();
        }
      });
    
      //play button handler
      $('#play').on('click', function(){
        if (that.isPlaying) {
          $(this).text('Play');
          that.pause();
        } else {
          $(this).text('Pause');
          that.play();
        }
      });


      //analysis loop
      var loop = function() { 
      requestAnimationFrame( function() {
        // console.log(that.getLevel());
        $('.square').css({
          'transform' : 'scale(' + (4*that.getMicLevel()) + ')'
        });
        $('.circle').css({
          'transform' : 'scale(' + (4*that.getLevel()) + ')'
        });
        loop(); //loop recursion
      });
    };
    loop(); // loop init
  }); //end on ready function
}); // end dom load function
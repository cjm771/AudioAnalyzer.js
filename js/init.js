$(function() {
  var aa = new AudioAnalyzer("https://dancepartyjukebox.now.sh/mp3s/xoxo-813.mp3", function() {
      var that = this;
      //start mic!
      this.startMic();
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
      $('#play').trigger('click');
      //analysis loop
      var loop = function() { 
      requestAnimationFrame( function() {
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
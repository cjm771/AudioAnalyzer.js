AudioAnalyzer.js
==================

# About

A simple audio analyzer for streamed sources + microphones. Optional React Component also included. 

Current features :
  - load media via url (cors must be enabled on your remote server)
  - load media via audio tag
  - start / stop mic
  - get mic level
  - start / stop media stream
  - get media level / bars for visuals
  - destroy routine
  - react component

# Demo

Deployed Demo here: https://audioanalyzer.herokuapp.com/  

![oof fun](http://g.recordit.co/UkyTd9hefJ.gif)
# Docs

Note: urls must be cors ready, see the `mediaCORSReadyServer` for how to deploy your own.
Todo: fill out doc for loading via html `<audio>` tag.

### init + playback
```js 
// new AudioAnalyzer(url, callback);
const myAnalyzer = new AudioAnalyzer('http://my.amazing.site.com/with/a/mp3.mp3', () => {
   
   // play it!
  this.play();
  // check statuses
  console.log(this.isPlaying); // true
  // stop  it
  this.pause();

  // whoo our mic isnt one
  console.log(this.isMicOn); // false
  // start mic
  this.startMic();
  // stop mic
  this.stopMic();

});
```

### Analysis
``` js
//once init, do stuff with it in a loop
const loop = () => {
  requestAnimationFrame( () => {
    console.log(
      myAnalyzer.getLevel(), // 0.0 - 1.0 loudnesss
      myAnalyzer.getBars(), // [ .., 0.1, 0.2, 0.4,...] - array of 0.0 - 1.0 numbers (16) for  visualizations
      myAnalyzer.getMicLevel(), // 0.0 - 1.0 loudnesss (mic)
    ); 
    this.loop(); //loop recursion
    } 
  });
}):
loop();
// we done here? k kill it.
myAnalyzer.destroy();

```

# React Component
A react data component can be conveniently used in your react application like so. `url` would be your mp3, `play ` would be a boolean toggle to start / stop the playing. And attach event listenrs to `onAnalyze` or  `onReady`.

###  Component
``` jsx
  <AudioAnalyzerNode 
      url={this.state.audioUrl}
      play={this.state.audioPlaying}
      onReady={this.onAudioReady.bind(this)}
      onAnalyze={this.onAudioAnalyze.bind(this)}
    />
```

### Listeners in your Parent Component
``` js

  onAudioReady(aa) { //aa = analyzer instance
      console.log('analyzer ready!');
    }

  onAudioAnalyze(level, bars) { // see getLevel() + getBar();
    console.log('analysis!', level, bars);
  }

```
# Log

  *v.25*
  - react data component for reporting and control
  - aa.getBars() - gets 16 numbers for bar visualization
  - aa.destroy() - destroys context and disconnects sources


  *v.01*
  - load media via url (cors must be enabled on your remote server)
  - load media via audio tag
  - start / stop mic
  - get mic level
  - start / stop media stream
  - get media level

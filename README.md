AudioAnalyzer.js
==================

# About

A simple audio analyzer for streamed sources + microphones. 

Current features :
  - load media via url (cors must be enabled on your remote server)
  - load media via audio tag
  - start / stop mic
  - get mic level
  - start / stop media stream
  - get media level

# Demo

Deployed Demo here: https://audioanalyzer.herokuapp.com/  

![oof fun](http://g.recordit.co/UkyTd9hefJ.gif)
# Docs

Note: urls must be cors ready, see the `mediaCORSReadyServer` for how to deploy yourown.
Todo: fill out doc for loading via html `<audio>` tag.

```js 
// new AudioAnalyzer(url, callback);
const myAnalyzer = new AudioAnalyzer('http://my.amazing.site.com/with/a/mp3.mp3', () => {
   // play it!
  this.play();
  // check statuses
  console.log(this.isPlaying); // true
  //do stuff with it
  console.log(this.getLevel()); // 0.0 - 1.0 loudnesss
  // stop  it
  this.pause();

  // whoo our mic isnt one
  console.log(this.isMicOn); // false
  // start mic
  this.startMic();
  console.log(this.getMicLevel()); // 0.0 - 1.0 loudnesss
  this.stopMic();

});

```

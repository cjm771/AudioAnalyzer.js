var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
app.use('/mp3s/', express.static('mp3s'));

app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
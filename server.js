const https = require('https');
const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 443;
const { spawn } = require('child_process');

function intervalFunc() {
  console.log("Hello!!!!");
  const pyProg = spawn('python3', ['./jsonator.py']);
  pyProg.stdout.on('data', function(data) {

      console.log(data.toString());
      // res.write(data);
      console.log('end python')
  })
   }
  setInterval(intervalFunc,300000);


app.use(express.static(__dirname + '/'));


app.get('/*', function(req, res) { 
  res.sendFile(path.join(__dirname + '/index.html'));
});


// Start the app by listening on the default
app.listen(80);
console.log('Server has started ... @ PORT : '+ 80);



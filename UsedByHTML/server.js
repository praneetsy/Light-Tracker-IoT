// server.js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 6969;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })
var lastTimeStamp = 0;

function checkLateMessages(){
  var currentTimestamp = new Date().getTime();
  if(currentTimestamp - lastTimeStamp >= 12000){
    console.log("Suspected Failure");
  //Each client will recieve "Suspected Failure"
  wss.clients.forEach(function each(client)){
    if(client.readyState === Websocket.OPEN){
      client.send(JSON.stringify({deviceId : "Suspected Failure"}));
    }
  });
  }
}

setInterval(checkLateMessages,1000);

wss.on('connection', function connection(ws) {
  console.log("Connection established");
  ws.on('message', function incoming(data) {
    var lastTimeStamp = new Date().getTime();
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    })
  })
})

server.listen(port, function() {
  console.log(`Server is listening on ${port}!`)
})


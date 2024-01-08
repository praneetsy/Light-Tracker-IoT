// Open a new WebSocket connection (ws), use wss for secure connection
var wsUri = 'ws://localhost:6969';
var websocket = new WebSocket(wsUri);

//Optional callback, invoked if a connection error has occurred
websocket.onerror = function(evt) { onError(evt) };
function onError(evt) {
    //writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}
// Optional callback, invoked when the connection is terminated
websocket.onclose = function() { alert('Connection closed'); }

// For testing purposes
// var output = document.getElementById("output");

// Optional callback, invoked when a WebSocket connection is established
websocket.onopen = function(evt) {
    onOpen(evt)
};
function onOpen() {
    // writeToScreen("Connected to " + wsUri);
}

/* optional
function writeToScreen(message) {
    output.innerHTML += message + "<br>";
}
*/
// A callback function invoked for each new message from the server
websocket.onmessage = function(evt) { onMessage(evt) };
function onMessage(evt) {
    console.log("received: " + evt.data);
    updateStatus(evt.data);
}

// Client-initiated send text to the websocket
function sendText(msg) {
    console.log("sending text: " + msg);
    websocket.send(msg);
}


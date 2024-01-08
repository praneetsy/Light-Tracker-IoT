// Called by websocket.js to update the id and time
function updateStatus(msg) {
    // parse json message to create an object
    var msgObj = JSON.parse(msg);
    if (msgObj["deviceId] == "Suspected Failure"){
        contents.innerHTML = "";
    // create a new list item tag
    var listItem = document.createElement("li");
    // add the tag with status data
    listItem.appendChild(document.createTextNode("suspected failure"));
    // place it in the document
    contents.appendChild(listItem);
	return;		
    }
    // get the deviceID
    var id = msgObj.deviceID;
    // get the time
    var time = msgObj.time;
    // find location in document to write
    var contents = document.getElementById("output");
    // clear the existing output
    contents.innerHTML = "";
    // create a new list item tag
    var listItem = document.createElement("li");
    // add the tag with status data
    listItem.appendChild(document.createTextNode(id+" arrived at "+time));
    // place it in the document
    contents.appendChild(listItem);
    }

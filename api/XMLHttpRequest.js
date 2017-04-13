// Create the XHR object to do GET to /data resource
var xhr = new XMLHttpRequest();
xhr.open("GET", "data", true);

// register the event handler
xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
        alert("We got data: " + xhr.response);
    }
}, false)

// perform the work
xhr.send();
'use strict';

/*
fetch API
The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object). This is just an HTTP response of course, not the actual image. To extract the image body content from the response, we use the blob() method (defined on the Body mixin, which is implemented by both the Request and Response objects). An objectURL is then created from the extracted Blob, which is then inserted into the img.
The fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings.
*/

var myHeaders = new Headers();
var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'no-cors',
    cache: 'default'
};

var url = 'http://www.dobermann-review.com/litters/savsan_2017_sant-kreal-elixir_markiza-sav-sanis/poster.jpg';

var myImage = document.querySelector('img');

fetch(url, myInit)
    .then(function (response) {
        if (response.ok) {
            return response.blob();
        }
        throw new Error('Network response was not ok.');
    })
    .then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
    })
    .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });

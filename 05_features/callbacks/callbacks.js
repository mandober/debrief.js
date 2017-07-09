// before: callbacks

// load-image.js

function loadImage(url, cb) {
    let img = new Image();

    img.onload = function () {
        cb(null, img);
    }

    img.onerror = function () {
        cb(new Error('cannot load image at' + url))
    }

    img.src = url;
}
//export default loadImage;


// usage.js

//import loadImage from 'load-image'
let addImg = (src) => {
    let imgEl = document.createElement("img");
    imgEl.src = src;
    document.body.appendChild(imgEl);
}

// pyramyd of doom
loadImage('img/1.jpg', (error, img1) => {
    addImg(img1.src);
    loadImage('img/2.jpg', (error, img2) => {
        addImg(img2.src);
        loadImage('img/3.jpg', (error, img3) => {
            addImg(img3.src);
        });
    });
});
// dom

(function () {

    var p = document.getElementsByTagName("p"); // node list, an array-like object
    var p2 = document.querySelector("p");
    var p3 = document.querySelectorAll("p");

    if (p) {
        for (var i; i < p.length; ++i) {
            console.log(p[i]);
        }
    }

})();



var h = document.querySelector('h1');

// h.onclick = function (e) {
//     console.log(e);
//     console.log(e.target);
// };

// h.onclick = e => console.log(e.target);

var c = 0;
h.onclick = e => {
    console.log(++c);
    if (c > 3) {
        // remove onclick
        h.onclick = e => null;
    }
};

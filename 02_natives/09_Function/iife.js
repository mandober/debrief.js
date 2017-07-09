// FUNCTIONS: IIFE (Immediately Invoked Function Expression)

var glob = 2;

// default pattern (either named or anonymous)
(function IIFE() {
    var a = 3;
    console.log(a); // 3
})();


// passing param(s)
(function IIFE(global) {
    var a = 3;
    console.log(a); // 3
    console.log(global.glob); // 2
})(window);


// calling a passed param
(function () {
    return alert;
})()('Boo!');


// passing a function as param (used in UMD pattern)
(function IIFE(daft) {
    daft(window);
})(function def(global) {
    var a = 3;
    console.log(a); // 3
    console.log(global.glob); // 2
});

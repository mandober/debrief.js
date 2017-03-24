// FUNCTIONS
// IIFE (Immediately Invoked Function Expression)


// default pattern (either named or anonymous)
var a = 2;
(function IIFE() {
    var a = 3;
    console.log(a); // 3
})();
console.log(a); // 2


// passing param(s)
var a = 2;
(function IIFE(global) {
    var a = 3;
    console.log(a); // 3
    console.log(global.a); // 2
})(window);
console.log(a); // 2


// calling a passed param
(function () {
    return alert;
})()('Boo!');


// UMD (Universal Module Definition) pattern:
// passing a function as param
var a = 2;
(function IIFE(daft) {
    daft(window);
})(function def(global) {
    var a = 3;
    console.log(a); // 3
    console.log(global.a); // 2
});


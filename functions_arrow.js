// FUNCTIONS
// Arrow functions
// Lexical scope of `this`

'use strict';


// No parameters: () => {...}
// 1 parameter: a => {...}
// More parameters: (a, b) => {...}

// before:
$("h1").click(function (event) {
    console.log('clicked');
});
// after:
$("h1").click((event) => {
    console.log('clicked');
});


// before:
const num = [1, 2, 3]
const squares = num.map(function (n) {
    return n * n;
});
console.log(squares); //[1,4,9]
// after:
const squares2 = num.map(n => n * n);


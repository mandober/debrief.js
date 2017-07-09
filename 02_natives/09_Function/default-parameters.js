// functions: default params

function x(a = 'abc', b = 'def') {
    console.log(a + b); // "abcghi"
}
x(undefined, 'ghi');

// default params look-back
function s(a = 2, b = a * 3) {
    console.log(a + b); // 8
}
s();

// Default params have their own scope, sandwitched between outer and funcion's inner scope:
var scope = "outer_scope";
function scoper(val = scope) {
    var scope = "inner_scope";
    console.log(val); // "outer_scope"
}
scoper();


// 'use strict' is not allowed inside a function that uses default parameters!
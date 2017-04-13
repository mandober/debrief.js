// FUNCTIONS

'use strict';

/*
    default params
*/
function x(a = 'abc', b = 'def') {
    console.log(a + b); // "abcghi"
}
x(undefined, 'ghi');

// default params look-back
function s(a = 2, b = a * 3) {
    console.log(a + b); // 8
}
s();

// Default params have their own scope, sandwitched
// between outer and funcion's inner scope:
var scope = "outer_scope";
function scoper(val = scope) {
    var scope = "inner_scope";
    console.log(val); // "outer_scope"
}
scoper();


/*
    rest
*/
function sayThings(tone, ...quotes) {
    console.log(Array.isArray(quotes)); // true (real array)
    console.log(`In ${tone} voice, I say ${quotes}`);
}
sayThings("Morgan Freeman", "Something serious", "Imploding Universe", "Amen");
// In Morgan Freeman voice, I say Something serious,Imploding Universe,Amen


/*
    spread
*/
function sumAll(a, b, c) {
    return a + b + c;
}
var numbers = [6, 7, 8];
// ES5 way of passing array as an argument of a function (abusing apply)
console.log(sumAll.apply(null, numbers)); // 21
// ES6 Spread operator
console.log(sumAll(...numbers)); // 21

// spread with arrays
var midweek = ['Wed', 'Thu'];
var weekend = ['Sat', 'Sun'];
var week = ['Mon', 'Tue', ...midweek, 'Fri', ...weekend];
//["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]	
console.log(week);


/*
returning values
*/
function a() {
    console.log('a');
    return function () {
        console.log('b');
    };
}
b = a(); // 'a'
b(); // 'b'
// OR:
a()(); // 'a' 'b'

// owerwite original function (above) from outside
a = a(); // 'a' (only 1. time, then:
a(); // 'b' (always 'b')

// owerwite a function from within itself:
function a() {
    console.log(1);
    a = function () {
        console.log(2);
    };
}
a(); // 1 (only 1st time)
a(); // 2



var a = (function() {

    function someSetup() {
        var setup = 'done';
    }

    function actualWork() {
        console.log('working');
    }

    someSetup();
    return actualWork;

}());

a(); // 'working'


// closure
(function () {
    var secret = 0;

    var getValue = function () {
        return secret;
    };

    var setValue = function (v) {
        if (typeof v === "number") {
            secret = v;
        }
    };

    return api = { s: setValue, g: getValue };
}())
api.s(42);
api.g(); // 42
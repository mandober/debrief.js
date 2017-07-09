'use strict';
// Optimization-killers
// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers

// V8 bailout reasons
// https://github.com/vhf/v8-bailout-reasons



/* `arguments`
Using slice on arguments prevents optimizations in some JavaScript engines (V8 for example). If you care for them, try constructing a new array by iterating through the arguments object instead.
https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
An alternative would be to use the despised Array constructor as a function: */
var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));



// global vs local vars

// global
let t0 = new Date(),
    i = 0,
    sum;
for (; i < 1000000; i++) {
    sum = i; // do anything
}
console.log(sum); // make sure result is used
let t1 = new Date();
console.log('Without local vars: ', t1 - t0);

// local
function count() {
    let i,
        sum;
    for (i = 0; i < 1000000; i++) {
        sum = i; // do anything
    }
    return sum;
}
let tt0 = new Date();
console.log(count()); // make sure result is used
let tt1 = new Date();
console.log('With local vars: ', tt1 - tt0);
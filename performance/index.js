'use strict';

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
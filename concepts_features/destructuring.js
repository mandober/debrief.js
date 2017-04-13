// Destructuring
'use strict';

// before
function foo() {
    return [1, 2, 3];
}
var tmp = foo(),
    a = tmp[0], b = tmp[1], c = tmp[2];
console.log(a, b, c); // 1 2 3

// array destructuring
var [a, b, c] = foo();
console.log(a, b, c); // 1 2 3


// before
function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}
var tmp = bar(),
    x = tmp.x, y = tmp.y, z = tmp.z;
console.log(x, y, z); // 4 5 6

// object destructuring
var { x: x, y: y, z: z } = bar();
console.log(x, y, z); // 4 5 6

// shorthand obj properties
var { x, y, z } = bar();
// same as, before:
console.log(x, y, z); // 4 5 6
// We're actually leaving off the x: part (not :x) when we use the shorter syntax

// target: source
var { x:p, y:q, z:r } = bar();
console.log(p, q, r); // 4 5 6



var [one, , , ,five] = ['a', 'b', 'c', 'd', 'e'];
one; // 'a'
five; // 'e'
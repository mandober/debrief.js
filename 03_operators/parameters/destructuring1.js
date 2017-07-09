//! Destructuring

// before...temp vars had to be used
function foo() {
    return [1, 2, 3];
}
var tmp = foo();

var tmp = foo(),
    a = tmp[0],
    b = tmp[1],
    c = tmp[2];
console.log(a, b, c);
// 1 2 3

// now...destructuring!
var [a, b, c] = foo();
console.log(a, b, c);
// 1 2 3



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





//! ASSIGNMENT WITH DESTRUCTURING

var o = { a: 1, b: 2, c: 3 };
var arr = [11, 22, 33];

// ASSIGNMENT TO INDIVIDUAL VARS
// destr array
var [d, e, f] = arr; // d=11, e=22, f=33
var [,two] = arr; // two=22

// destr object: assignment to eponymous individual vars
var {a, b, c} = o; // a=1, b=2, c=3

// destr object: assignment to individual vars with different name
var { a:r, b:s, c:t } = o; // -> r=1, s=2, t=3

// if var is already declared:
var aa, bb, cc, dd, ee, ff;
// destr array:
[aa, bb, cc] = arr; // aa=11, bb=22, cc=33
// destr object: parens are necesary otherwise it is interpreted as start of code block!
({ a: dd, b: ee, c: ff } = o); // dd=1, ee=2, ff=3


//! ASSIGNMENT TO ANOTHER OBJECT
// eponymous properties
var obj1 = { a, b, c } = o;

// assignment to another object DOESN'T WORK LIKE THIS:
// this just assigns object reference: obj2 === o
var obj2 = {a:x, b:y, c:z} = o; // { a:1, b:2, c:3 }
var obj2 = {x, y, z} = o;       // { a:1, b:2, c:3 }
// CORRECT:
var obj2 = {};
({ a: obj2.x, b: obj2.y, c: obj2.z } = o); // { x:1, y:2, z:3 }

// dynamic-ish assignment: clone object
var p = Object.getOwnPropertyNames(o); // p = [ "a", "b", "c" ]
var o2 = {};
( { [p[0]]:o2.x, [p[1]]:o2.y, [p[2]]:o2.z } = o ); // o2 = { a:1, b:2, c:3 }
// add props one by one:
for (let index = 0; index < p.length; index++) {
    ({ [p[index]]: o2[p[index]]} = o);
}

// map an object to an array:
var o1 = { a: 1, b: 2, c: 3 },
    a2 = [];
({ a: a2[0], b: a2[1], c: a2[2] } = o1);
console.log(a2); // [1,2,3]

// map an array to an object:
var a1 = [1, 2, 3],
    o2 = {},
    o3 = {};
[o2.a, o2.b, o2.c] = a1;
console.log(o2); // { a:1, b:2, c:3 }
[o3[0], o3[1], o3[2]] = a1; // { 0:1, 1:2, 2:3}

// reorder one array to another:
var a1 = [1, 2, 3],
    a2 = [];
[a2[2], a2[0], a2[1]] = a1;
console.log(a2); // [2,3,1]




// swap variables
var x = 10,
    y = 20;
[y, x] = [x, y];
console.log(x, y); // 20 10

// REPEATED ASSIGNMENTS
var { a: x, a: y } = { a: 1 };
console.log(x, y); // 1 1

// That also means you can both destructure a sub-object or sub-array's
// property and also capture the sub-object or sub-array's value itself:
var { a: { x: X, x: Y }, a } = { a: { x: 1 } };
X; // 1
Y; // 1
a; // { x: 1 }

( { a: X, a: Y, a: [Z] } = { a: [1] } );
X; // [1]
X.push(2);
X; // [1, 2]
Y[0] = 10;
X; // [10,2]
Y; // [10,2]
Z; // 1

// chained destr.
var o = { a: 1, b: 2, c: 3 },
    p = [4, 5, 6],
    a, b, c, x, y, z;
({ a } = { b, c } = o);
[x, y] = [z] = p;
console.log(a, b, c); // 1 2 3
console.log(x, y, z); // 4 5 4

// rest destr.
var a = [2, 3, 4];
var [b, ...c] = a;
console.log(b, c); // 2 [3,4]


// DEFAULT VALUE ASSIGNMENT
function foo() {
    return [1, 2, 3];
}
var [a = 3, b = 6, c = 9, d = 12] = foo();
console.log(a, b, c, d); // 1 2 3 12

function bar() {
    return {
        a:4,
        b:5,
        c:6
    };
}
var { x = 5, y = 10, z = 15, w = 20 } = bar();
console.log(x, y, z, w); // 4 5 6 20
// or with renamed vars:
var { x, y, z, w: WW = 20 } = bar();
console.log(x, y, z, WW); // 4 5 6 20


// brain-fuck destructuring
var x = 200, y = 300, z = 100;
var o1 = { x: { y: 42 }, z: { y: z } };
({ y: x = { y: y } } = o1);
({ z: y = { y: z } } = o1);
({ x: z = { y: x } } = o1);


// Nested destructuring
var a1 = [1, [2, 3, 4], 5];
var [a, [b, c, d], e] = a1;
console.log(a, b, c, d, e); // 1 2 3 4 5

var o1 = { x: { y: { z: 6 } } };
var { x: { y: { z: w } } } = o1;
console.log(w); // 6



// DESTRUCTURING PARAMETERS
// ========================

// destructuring array
function foo([x, y]) {
    console.log(x, y);
}
foo([1, 2]); // 1 2
foo([1]); // 1 undefined
foo([]); // undefined undefined

// destructuring object
function foo({ x, y }) {
    console.log(x, y);
}
foo({ y: 1, x: 2 }); // 2 1
foo({ y: 42 }); // undefined 42
foo({}); // undefined undefined

// variants:
function f1([x = 2, y = 3, z]) { }
function f2([x, y, ...z], w) { }
function f3([x, y, ...z], ...w) { }
function f4({ x: X, y }) { }
function f5({ x: X = 10, y = 20 }) { }
function f6({ x = 10 } = {}, { y } = { y: 10 }) { }

// Destructuring Defaults + Parameter Defaults
function f6({ x = 10 } = {}, { y } = { y: 10 }) {
    console.log(x, y);
}
f6(); // 10 10
f6({}, {}); // 10 undefined

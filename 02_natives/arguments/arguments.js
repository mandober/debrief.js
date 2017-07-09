//! arguments

// contains a list of arguments passed to a function

// Although arguments looks like an array, it isn't an array:
// It's more like an object that happens to bind some values to
// properties with names that look like integers starting with zero:

const args = function (a, b) {
    console.log(Array.from(arguments));
    return arguments;
}
var a = args(2, 3); /*?*/
a; //=> { '0': 2, '1': 3 }
Reflect.ownKeys(a); /*?*/

// which, it seems, means that a pojo with such a structure and addition of obligatory
// `length` property can also be turned into array using Array.from() as `arguments` does:
var o = { 0: 2, 1: 3, length: 2 };
o = Array.from(o); /*?*/
Reflect.ownKeys(o); /*?*/

// without `length` property it gets converted to an empty array, as if length=0
var d = { '0': 2, '1': 3};
d = Array.from(d); /*?*/
Reflect.ownKeys(d); /*?*/

// and additinal string prop names would be discarded as array keys, but not as props
var u = { 0: 2, 1: 3, prop: "abc", length: 2 };
u = Array.from(u); /*?*/
Reflect.ownKeys(u); /*?*/


//! arguments and arrow fn
// Instead of being bound when the function is invoked, the fat arrow function always acquires
// the bindings for `this` and `arguments` from its enclosing scope, just like any other binding.

// function expressions
(function () {
    return (function () { return arguments[0]; })('inner');
})('outer'); /*?*/
//=> "inner"

// fat arrow:
(function () {
    return (() => arguments[0])('inner');
})('outer'); /*?*/
//=> "outer"




// this function takes a number and returns an array representing a row in a hypothetical multiplication table.
const row = function () {
    return mapWith(
        (column) => column * arguments[0],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    )
};
row(3);
//=> [3,6,9,12,15,18,21,24,27,30,33,36]

// This works just fine, because arguments[0] refers to the 3 we passed to the function row. Our “fat arrow” function (column) => column * arguments[0] doesn’t bind arguments when it’s invoked.But if we rewrite row to use the function keyword, it stops working:
const row2 = function () {
    return mapWith(
        function (column) { return column * arguments[0] },
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    )
};
row2(3);
//=> [1,4,9,16,25,36,49,64,81,100,121,144]

//! Array.of
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of

Syntax:
Array.of(element0[, element1[, ...[, elementN]]])

Parameters:
   elementN    Elements of which to create the array.

Return value: A new Array instance.


The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7 (Note: this implies an array of 7 empty slots, not slots with actual undefined values).
*/

Array.of(7); /*?*/

Array.of(1, 2, 3); /*?*/
// [1, 2, 3]
Array(7); /*?*/
// [ , , , , , , ]
Array(1, 2, 3); /*?*/
Array.of("7"); /*?*/
Array.of("7", [], {}, 89, 9); /*?*/
Array.of("[[a],[s]]"); /*?*/
Array.of([[1],[2]]); /*?*/





//! Polyfill
// Running the following code before any other code will create Array.of() if it's not natively available.
if (!Array.of) {
    Array.of = function () {
        return Array.prototype.slice.call(arguments);
    };
}


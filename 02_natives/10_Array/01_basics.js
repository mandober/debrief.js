/* ARRAY

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

* exotic object: integer indices (max: 2**32-2) and auto-updated `length` property

* arrays, like all objects, is always passed by reference

* array is initialized with the given elements, except in the case where a single argument is passed to the
  Array constructor and that argument is a number.

* arrayLength: If the only argument passed to the Array() constructor is an integer between 0 and 2**32-1(incl),
  this returns a new array with its length property set to that number (Note: this implies an array of
  arrayLength empty slots, not slots with actual undefined values). If the argument is any other number,
  a RangeError exception is thrown.

* Arrays cannot use strings as element indexes (as in an associative array), but must use integers.
  Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an
  element from the array list itself, but will set or access a variable associated with that array's object
  property collection.


*/

//* Array constructor
var arr = new Array(1, 2, 3, 4); // [1,2,3,4]
// new is not necessary
var arr = Array(4, 5, 6); // [1,2,3,4]
// sets the length
var arr = new Array(4); // [<4 empty elements>]


//* Array literal
var arr = [11, 'hi', 3.14];


//* Arrays are always passed by reference:
var arr1 = [1, 2, 3];
var arr2 = arr1; // variables, arr1 and arr2, share a reference to the [1, 2, 3] value
arr2.push(4);
arr1; // [1,2,3,4]
arr2; // [1,2,3,4]
arr1 === arr2; // true


//* length
// only sets the length
var arr = new Array(4); // [<4 empty elements>]
arr[0] = 9;
arr[1] = 8;
arr[2] = 7;
arr[3] = 6;
arr[4] = 5;
arr[5] = 4;
arr.length; // 6

//* length: resetting length deletes elements
arr.length = 3;
arr.length; // 3, and the elements are gone


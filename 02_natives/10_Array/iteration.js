// arrays: iteration methods

/*
3 kinds of iteration methods, all nondestructive:
 * EXAMINATION       methods mainly observe the content of an array;
 * TRANSFORMATION    methods derive a new array from the receiver; and
 * REDUCTION         methods compute a result based on the receiver’s elements.


EXAMINATION METHODS

arr.examinationMethod(function cb(element, index, array), thisValue?)

* Depending on the examination method, the callback returns a boolean or nothing
* thisValue sets `this` in callback function. Optional.

*/
Array.prototype.forEach(callback, thisValue)
// Iterates over the elements of an array:

Array.prototype.every(callback, thisValue)
// Returns true if the callback returns true for every element.
// It stops iteration as soon as the callback returns false.
// * If the array is empty, the result is true (and callback is not called):
[].every(function () { throw new Error() }) // true

Array.prototype.some(callback, thisValue)
// Returns true if the callback returns true for at least one element.
// It stops iteration as soon as the callback returns true.
// * If the array is empty, the result is false (and callback is not called):
[].some(function () { throw new Error() }) // false

// One potential pitfall of forEach() is that it does not support break or similar
// to prematurely abort the loop. If you need to do that, you can use some():
function breakAtEmptyString(strArr) {
    strArr.some(function (elem) {
        if (elem.length === 0) {
            return true; // break
        }
        console.log(elem);
        // implicit: return undefined (interpreted as false)
    });
}
// some() returns true if a break happened, and false otherwise.
// This allows you to react differently depending on whether iterating finished successfully

/*
TRANSFORMATION METHODS

Transformation methods take an input array and produce an output array,
while the callback controls how the output is produced.

arr.transformationMethod(function cb(element, index, array), thisValue?)

*/
Array.prototype.map(callback, thisValue)
// Each output array element is the result of applying callback to an input element.

Array.prototype.filter(callback, thisValue)
// The output array contains only those input elements for which callback returns true.


/*
REDUCTION METHODS

For reducing, the callback has a different signature:

function cb(accumulator, currentElement, currentIndex, array)


The first time the callback is called, accumulator and currentValue can be one of two values:

* If initialValue is provided in the call to reduce, then accumulator will be equal to initialValue,
  and currentValue will be equal to the first value in the array.
  Reduce will execute the callback function starting at index 0.

* If no initialValue is provided, then accumulator will be equal to the first value in the array,
  and currentValue will be equal to the second. Reduce will execute the callback function starting
  at index 1, skipping the first index.

* If the array is empty and no initialValue is provided, TypeError will be thrown.
* If the array has only one element (regardless of position) and no initialValue is provided,
  or if initialValue is provided but the array is empty, the solo value will be returned without calling callback.

*/
Array.prototype.reduce(callback, initialValue)
Array.prototype.reduceRight(callback, initialValue)



// reduce example: Bonding arrays contained in an array of objects using the spread operator and initialValue

// friends - an array of objects where object field "books" is a list of favorite books
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

// allbooks - list which will contain all friends' books + additional list contained in initialValue
var allbooks = friends.reduce(function (prev, curr) {
    return [...prev, ...curr.books];
}, ['Alphabet']); // allbooks = ['Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings', 'The Shining' ]


/* reduce
The reduce method applies a function against an accumulator and each
element in the array, from left to right, to reduce it to a single value.

arr.reduce(callback, [initialValue])
arr.reduce(function(acc, curr, idx, arr){}, [initialValue])

callback - Function to execute on each element in the array, taking 4 arguments:
1. accumulator
   The accumulator accumulates the callback's return values; it is the accumulated value previously
   returned in the last invocation of the callback, or initialValue, if supplied.
2. currentValue
   The current element being processed in the array.
3. currentIndex
   The index of the current element being processed in the array.
   Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
4. array
   The array reduce was called upon.

initialValue - [Optional] Value to use as the first argument to the first call of the callback.
   If no initial value is supplied, the first element in the array will be used.
   Calling reduce on an empty array without an initial value is an error.

*/

// using REDUCE:

var a1 = [0, 1, 2, 3];
var a2 = [[0, 1], [2, 3]];
var a3 = [[0, 1], 2, [3, [4]]];

// example: sum all elements
var sum = a1.reduce((acc, el, i) => {
    console.log('acc: ', acc);
    console.log(`el[${i}]: ${el}`);
    return acc + el;
}); /*?*/


// example: reverse an array
var rev = a2.reduce((acc, el, i) => {
    acc.unshift(el);
    console.log('acc: ', acc);
    console.log(`el[${i}]: ${el}`);
    return acc;
}, []); /*?*/


// example: flatten an array
var flatten = arr => arr.reduce((acc, el, i) => {
    console.log('acc: ', acc);
    console.log(`el[${i}]: ${el}`);
    return acc.concat(Array.isArray(el) ? flatten(el) : el);
}, []);
flatten(a2);/*?*/


// example: flatten2 an array
function flatten2(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, el, i) => {
            console.log('acc: ', acc);
            console.log(`el[${i}]: ${el}`);
            return acc.concat(flatten2(el));
        }, []);
    } else {
        return arr;
    }
}
flatten2(a3);/*?*/



// example: Counting instances of values in an object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce((acc, el, i) => {
    console.log('acc: ', acc);
    console.log(`el[${i}]: ${el}`);
    (el in acc) ? acc[el]++ : acc[el] = 1;
    return acc;
}, {}); /*?*/
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }



// example: Bonding arrays contained in an array of objects using the spread operator and initialValue

// friends - an array of objects where object field "books" - list of favorite books
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
    books: ['The Lord of the Rings', 'Bible'],
    age: 18
}];

// allbooks - list which will contain all friends' books
var allbooks = friends.reduce(function (prev, curr) {
    return [...prev, ...curr.books];
}, []);
// ['Bible', 'Harry Potter', 'War and peace', 'Romeo and Juliet', 'The Lord of the Rings', 'Bible']




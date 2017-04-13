/* Calling Methods Generically

A function that can be used in this manner is called a generic method;
it must be prepared for this not being an instance of “its” constructor.
Thus, not all methods are generic; ECMAScript explicitly states which ones are:
http://speakingjs.com/es5/ch17.html#list_of_generic_methods
*/

// Array.prototype.push
var arr1 = ['a', 'b'];
var arr2 = ['c', 'd'];
Array.prototype.push.apply(arr1, arr2); // 4
arr1; // ['a', 'b', 'c', 'd']

// Array.prototype.join
Array.prototype.join.call('abc', '-'); // 'a-b-c'

// Array.prototype.map
[].map.call('abc', x => x.toUpperCase()); // ['A', 'B', 'C']
// Using map() generically is more efficient than using split(''), which creates an intermediate array:
'abc'.split('').map(x => x.toUpperCase()); // ['A', 'B', 'C']

// Apply a string method to nonstrings.toUpperCase() converts the receiver to a string and uppercases the result:
String.prototype.toUpperCase.call(true) // 'TRUE'
String.prototype.toUpperCase.call(['a', 'b', 'c']) // 'A,B,C'

// Invoke an array method on a fake array:
var fakeArray = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.join.call(fakeArray, '-') // 'a-b'

// array method transforms an object that it treats like an array:
var obj = {}; Array.prototype.push.call(obj, 'hello'); // 1
obj; // { '0': 'hello', length: 1 }


// array-like objects: 
// arguments, strings, dom collections
Array.prototype.slice.call(arguments);

// To iterate over all elements of an array- like object, you can use a
// simple for loop, but you can also borrow Array.prototype.forEach():
Array.prototype.forEach.call("abcdef", (elem, i) => console.log(i + '. ' + elem));


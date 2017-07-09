// USING THE SET OBJECT

var mySet = new Set();
mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add('some text'); // Set { 1, 5, 'some text' }
var o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 }); // o is referencing a different object so this is okay
mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true
mySet.size; // 5
mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed
mySet.size; // 4, we just removed one value
console.log(mySet);
// Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}



// ITERATING SETS

// iterate over items in set
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet.keys()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet.values()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}
//(key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(key);


// convert Set object to an Array object, with Array.from
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}]

// the following will also work if run in an HTML document
//mySet.add(document.body);
//mySet.has(document.querySelector('body')); // true


// converting between Set and Array
set1 = new Set([8, 7, 3, 6]);
set2 = new Set([1, 2, 3, 4]);

mySet2 = new Set([1, 2, 3, 4]);
mySet2.size; // 4
[...mySet2]; // [1, 2, 3, 4]


// intersect can be simulated via
var intersection = new Set([...set1].filter(x => set2.has(x)));/*?*/

// difference can be simulated via
var difference = new Set([...set1].filter(x => !set2.has(x)));/*?*/

// Iterate set entries with forEach
mySet2.forEach(value => console.log(value)); /*?*/
// 1
// 2
// 3
// 4


// Relation with Array objects

var myArray = ['value1', 'value2', 'value3']; /*?*/

// Use the regular Set constructor to transform an Array into a Set
var mySet = new Set(myArray);

mySet.has('value1'); // returns true

// Use the spread operator to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray

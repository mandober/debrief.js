// Examples


// Using the Map object

var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function () { };

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
// because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function () { }) // undefined, because keyFunc !== function () {}



// Using NaN as Map keys

// NaN can also be used as a key.Even though every NaN is not equal to itself (NaN !== NaN is true), the following example works because NaNs are indistinguishable from each other:

var myMap = new Map();
myMap.set(NaN, 'not a number');

myMap.get(NaN); // "not a number"

var otherNaN = Number('foo');
myMap.get(otherNaN); // "not a number"



// Iterating Maps with for..of

// Maps can be iterated using a for..of loop:

    var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (var [key, value] of myMap) {
    console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one

for (var key of myMap.keys()) {
    console.log(key);
}
// 0
// 1

for (var value of myMap.values()) {
    console.log(value);
}
// zero
// one

for (var [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one



// Iterating Maps with forEach()

// Maps can be iterated using the forEach() method:

myMap.forEach(function (value, key) {
    console.log(key + ' = ' + value);
});
// Will show 2 logs; first with "0 = zero" and second with "1 = one"




// RELATION WITH ARRAYS

var kvArray = [['key1', 'value1'], ['key2', 'value2']];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var myMap = new Map(kvArray);
myMap.get('key1'); // returns "value1"

// Use the Array.from functon to transform a map into a 2D key-value Array
console.log(Array.from(myMap));
// Will show you exactly the same Array as kvArray

// Or use the keys or values iterators and convert them to an array
console.log(Array.from(myMap.keys()));
// Will show ["key1", "key2"]

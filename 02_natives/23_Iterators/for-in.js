'use strict';
// for...in
// iterates over the ENUMERABLE properties of an object in this order:
// 1) list numeric prop names in ASC order
// 2) list alphabetic prop names in addition order

// The order of iteration is not guaranteed, the array indexes may not be visited in numeric order.
// Inherited properties are also enumerated.


// OBJECTS
var obj = {
    2: 44,
    f: 33,
    0: 11,
    [Symbol.iterator]() {
        let keys = Object.keys(this),
            i = 0;
        return {
            next: function () {
                return {
                    value: keys[i],
                    done: i++ >= keys.length
                };
            }
        }
    }
}
obj.a = 88;
obj[1] = 22;
obj[Symbol.toStringTag] = "obj";


for (var key in obj) console.log(key + ' = ' + obj[key]);
// 0 = 11
// 1 = 22
// 2 = 33
// f = 33
// a = 88

for (var key of obj) console.log(key + ' = ' + obj[key]);
// 0 = 11
// 1 = 22
// 2 = 33
// f = 33
// a = 88




// ARRAYS
var y = []; // Create a new empty array
y[5] = 5;

for (var i = 0; i < y.length; i++) console.log(y[i]); // undefined x 5, 5
for (var x in y) console.log(x); // 5
for (var x of y) console.log(x); // undefined x 5, 5
y.forEach(entry => console.log(entry)); // 5

// REVERSE iteration with `for`
var arr = [1, "b", 3, "c", 2, "a"];
for (var i = arr.length; i--;) console.log(arr[i]);
// an arrow, end it with a wink ;
for (var i = arr.length; i --> 0; ) console.log(arr[i]);
'use strict';
// iteration

// OBJECT
var y = {
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
y.a = 88;
y[1] = 22;
y[Symbol.toStringTag] = "obj";


// for...in
for (var x in y) console.log(x); // 5

// for...of (if iterator is manually implemented)
for (var x of y) console.log(x); // undefined x 5, 5



// ARRAYS
var arr = ["a", "b", "c"];

// for
for (var i = 0; i < arr.length; i++) console.log(arr[i]); // undefined x 5, 5

// for...in
for (var x in arr) console.log(x); // 5

// for...of
for (var x of arr) console.log(x); // undefined x 5, 5

// Array#forEach
arr.forEach(entry => console.log(entry)); // 5

var it = arr.entries();
var entry;
while (!(entry = it.next()).done) console.log(entry.value);


console.log('abc: ', abc);

//! Spread Operator (…)

//* In ES5, the apply() method is a tool for passing an array as arguments to a function.
var myArray = [5, 10, 50];
Math.max(myArray); // Error: NaN
Math.max.apply(Math, myArray); // 50
//* with apply() the array is sent as individual elements

//* Fortunately, with the introduction of the spread operator in ECMAScript 6, we no longer need to use the apply() method. With the spread operator, we can easily expand an expression into multiple arguments:
var myArray = [5, 10, 50];
Math.max(...myArray); // 50
//* Here, the spread operator expands myArray to create individual values for the function.

//* spread can be used multiple times and can be mixed with other arguments:
myFunction(5, ...params, 20, ...[25]);

//* it can easily be used with constructors:
new Date(...[2016, 5, 6]);
// Mon Jun 06 2016 00:00:00 GMT-0700 (Pacific Daylight Time)

//* in ES5 we would need to use a complicated pattern to avoid getting a type error:
new Date.apply(null, [2016, 4, 24]);
// TypeError: Date.apply is not a constructor
new (Function.prototype.bind.apply(Date, [null].concat([2016, 5, 6])));
// Mon Jun 06 2016 00:00:00 GMT-0700








function sumAll(a, b, c) {
    return a + b + c;
}

var numbers = [6, 7, 8];

// ES5 way of passing array as an argument of a function (abusing apply)
console.log(sumAll.apply(null, numbers)); // 21

// ES6 Spread operator
console.log(sumAll(...numbers)); // 21

// spread with arrays
var midweek = ['Wed', 'Thu'];
var weekend = ['Sat', 'Sun'];
var week = ['Mon', 'Tue', ...midweek, 'Fri', ...weekend];
console.log(week); // ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

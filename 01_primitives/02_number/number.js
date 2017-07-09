// NUMBER

// parse stringified numbers
var num = ['1', '3', '66', '8']; /*?*/
num = num.map(Number); /*?*/


// CONSTANTS
Number.EPSILON; // 2e-52
Number.MAX_VALUE; // 1.798e+308
Number.MIN_VALUE; // 5e-324
Number.MAX_SAFE_INTEGER; // 9,007,199,254,740,991
Number.MIN_SAFE_INTEGER; // -9,007,199,254,740,991
Number.POSITIVE_INFINITY; // Infinity
Number.NEGATIVE_INFINITY; // -Infinity

1 / 0; // Infinity
-1 / 0; // -Infinity


Number.isInteger(42); // true
Number.isInteger(42.000); // true
Number.isInteger(42.3); // false

Number.isSafeInteger(Number.MAX_SAFE_INTEGER); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true

5 / Infinity; // 0
-5 / Infinity // -0
1 / -0; // -Infinity
1 / -Infinity; // -0
Infinity === -Infinity; //false

var zero = 0 / -3;
zero.toString(); // "0"
a + ""; // "0"
String(a); // "0

+"-0"; // -0
Number("-0"); // -0
JSON.parse("-0"); // -0
JSON.stringify(-0) // "0"
- 0 == 0; // true
Object.is(-0, 0); // false




// isNan
var num = "abc";
if (isNan(num)) console.log('not a number');
NaN === NaN; //false (!)


// parseInt
// only parse number from beginning of string, until first non- number
num = parseInt("12abc"); // 12
// supply radix:
parseInt('111', 2); // 7

// coercion
var a = '12';
var num = +a; // 12
num = Number(a); // 12
3 + '5' // "35"
5 + 3 + '5' // "85"

// Math
var x = 200.6;
x = Math.round(x);

// radix
typeof 123;   // number
typeof 0x0a;  // hex, 10
typeof 0o10;  // octal, 8
typeof 010;   // octal, 8
typeof 0b111; // binary, 7 (ES6 only)

// magnitude
typeof 2e+3;  // number
typeof 2e-3;  // number
typeof Infinity; // number
// the biggest number in JS (maybe on x86): 1.7976931348623157e+308, the smallest: 5e-324
6 / 0; // +Infinity
// -Infinity is the smallest number
Infinity - Infinity; // NaN (not 0)
-Infinity + Infinity; // NaN
typeof NaN; // "number"

// The global variant of `isFinite()` tries to cast the value through Number(value),
// while `Number.isFinite()` doesn't, hence it's more accurate.
isFinite(9999999999999999);
Number.isFinite(9999999999999999); // ES6

// `isNaN()` is cast to number with parseInt, while `Number.isNaN()` is not
isNaN('123abc'); // true
Number.isNaN('123abc'); // false
Number.isNaN(Infinity); // false

/*
isNumber() mozilla polyfill
*/
function isNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
}
isNumber('12'); // false
isNumber(NaN); // false
isNumber(Infinity); // true



/*
isNum() my polyfill (exclude +/-Infinity)
*/
function isNum(value) {
    return typeof value === 'number'
        && !Number.isNaN(value)
        && value !== Infinity
        && value !== -Infinity;
}

isNum('12'); // false
isNum('12ab'); // false
isNum(NaN); // false
isNum(Infinity); // false
isNum(-Infinity); // false
isNum(+Infinity); // false


// `Number.isInteger()`
console.log(Number.isInteger(123)); //true
console.log(Number.isInteger(1.23));//false
console.log(Number.isInteger('test')); //false
console.log(Number.isInteger(Infinity)); //false
console.log(Number.isInteger(NaN)); //false

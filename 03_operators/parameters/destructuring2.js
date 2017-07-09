//! Destructuring
'use strict';

//? Assignment Destructuring
var pony = { foo: 1 };

var { foo } = pony; // is equivalent to foo = pony.foo;

var { foo: baz } = pony; // is equivalent to var baz = pony.foo

// You can provide default values,
var { foo = "bar" } = pony; // yields `foo:'bar'` if `baz.foo` is undefined

// You can pull as many properties as you like, aliased or not
var { foo, bar: baz } = { foo: 0, bar: 1 }; // gets you foo: 0 and baz: 1

// You can go deeper.
var {foo: { bar } } = { foo: { bar: 'baz' } }; // gets you bar: 'baz'

// You can alias that too.
var {foo: { bar: deep } } = { foo: { bar: 'baz' } }; // gets you deep: 'baz'

// Properties that aren’t found yield undefined as usual, e.g:
var { foo } = {};

// Deeply nested properties that aren’t found yield an error, e.g:
var { foo: { bar } } = {};

//? destructuring for arrays
[a, b] = [0, 1]; // yields a: 0 and b: 1

// You can skip items in an array,
[a, , b] = [0, 1, 2]; // getting a: 0 and b: 2

// You can swap without an “aux” variable,
[a, b] = [b, a];


//? destructuring in function parameters

// Assign default values like
function foo1(bar = 2) { }

// Those defaults can be objects, too
function foo2(bar = { a: 1, b: 2 }) { }

// Destructure bar completely, like
function foo3({ a = 1, b = 2 }) { }

// Default to an empty object if nothing is provided, like
function foo4({ a = 1, b = 2 } = {}) { }

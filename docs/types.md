# JS Reference


## JS Types

**6 primitive types:**
- boolean
- number
- string
- symbol
- undefined
- null

**1 compound type:**
- object


## Terms

*primitives*
*builtins*
*natives*
*builtins*
*exotic objects*
*compound*
*complex*
*object*
*pojo*



# Standard objects by category
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects


## Value properties

These global properties return a simple value; they have no properties or methods.

```js
Infinity
NaN
undefined
null
```


## Properties (attributes and methods)



## Global functions
These functions are called globally and directly, rather than
on an object, and they return their results to the caller.
*There are 12 global functions:*

1.  eval()
2.  uneval()
3.  isFinite()
4.  isNaN()
5.  parseFloat()
6.  parseInt()
7.  decodeURI()
8.  decodeURIComponent()
9.  encodeURI()
10. encodeURIComponent()
11. escape()
12. unescape()



```js

// globals:
// These global functions are called globally rather than on an
// object directly and they return their results to the caller.

eval()
uneval()
isFinite()
isNaN()
parseFloat()
parseInt()
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()
escape()
unescape()

// Fundamental objects
Object
Function
Boolean
Symbol
Error
EvalError
InternalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError

// Numbers and dates
// These are the base objects representing numbers, dates, and mathematical calculations.
Number
Math
Date

// Text processing
// These objects represent strings and support manipulating them.
String
RegExp

// Indexed collections
// These objects represent collections of data which are ordered by
// an index value. This includes (typed) arrays and array-like constructs.
Array
Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array

// Keyed collections
// These objects represent collections which use keys; these contain 
// elements which are iterable in the order of insertion.
Map
Set
WeakMap
WeakSet

// Vector collections
// SIMD vector data types are objects where data is arranged into lanes.
SIMD
SIMD.Float32x4
SIMD.Float64x2
SIMD.Int8x16
SIMD.Int16x8
SIMD.Int32x4
SIMD.Uint8x16
SIMD.Uint16x8
SIMD.Uint32x4
SIMD.Bool8x16
SIMD.Bool16x8
SIMD.Bool32x4
SIMD.Bool64x2

// Structured data
// These objects represent and interact with structured data buffers
// and data coded using JavaScript Object Notation (JSON).
ArrayBuffer
SharedArrayBuffer
Atomics
DataView
JSON

// Control abstraction objects:
Promise
Generator
GeneratorFunction
AsyncFunction

// Reflection
Reflect

// Internationalization:
Intl
Intl.Collator
Intl.DateTimeFormat
Intl.NumberFormat

// WebAssembly:
WebAssembly
WebAssembly.Module
WebAssembly.Instance
WebAssembly.Memory
WebAssembly.Table
WebAssembly.CompileError
WebAssembly.LinkError
WebAssembly.RuntimeError

// Non-standard objects:
Iterator
ParallelArray
StopIteration

// Other:
arguments
```

/* SYMBOL

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
https://developer.mozilla.org/en-US/docs/Glossary/Symbol
http://exploringjs.com/es6/ch_symbols.html

- an instance of Symbol can be assigned to an L-value and
- it can be examined for identity

* Generally it is used as the key for an object property when the property is intended to be private.
* A value having the data type "symbol" can be referred to as a "symbol value".
* At run-time, a symbol value is created by invoking the function Symbol(),
  which dynamically produces an anonymous, unique value.
* When a symbol value is used as the identifier in a property assignment, the property (like the symbol)
  is anonymous; and also is non-enumberable.
* The property can be accessed by using the original symbol value that created it,
  or by iterating on the result array of `Object.getOwnPropertySymbols()`

The built in function "Symbol ()" is an incomplete class that returns a symbol value when called as a function
- it throws an error upon attempts to use it as a constructor with the syntax "new Symbol()",
- it has static methods for accessing JavaScript's global symbol table, and
- it has static properties for addressing certain symbols that are present in commonly used objects.
*/

var sym = Symbol("optional description");
typeof sym; // "symbol"
sym.toString(); // "Symbol(optional description)"
String(sym).slice(7, -1); // "optional description"

sym instanceof Symbol; // false
var symObj = Object(sym); // box the symbol
symObj instanceof Symbol; // true
symObj.valueOf() === sym; // true
Object.prototype.toString.call(symObj); // "[object Symbol]"


// The internal value of a symbol itself, referred to as its [[name]], is hidden from the code
// and cannot be obtained. You can think of this symbol value as an automatically generated,
// unique (within your application) string value.

var white = Symbol('38;2;255;255;255');
var orange = Symbol('38;2;240;148;9');
var black = Symbol('38;2;0;0;0');
var obj = {
    a: 11,
    b: 12,
    [white]: 13,
    [orange]: '\x1b[38;2;240;148;9m %s \x1b[0m',
    [black]: 15,
};
Object.getOwnPropertySymbols(obj);


// METHODS
Object.getOwnPropertyNames(Symbol);
// ['length','name','arguments','caller','prototype','hasInstance','isConcatSpreadable','iterator','match',
// 'replace','search','species','split','toPrimitive','toStringTag','unscopables','for','keyFor']

/*
Symbol.iterator
Symbol.toStringTag
Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.toPrimitive
Symbol.unscopables
Symbol.species
Symbol.match
Symbol.prototype
Symbol.replace
Symbol.search
Symbol.split

Symbol.for()
Symbol.keyFor()
Symbol.prototype.toSource()
Symbol.prototype.toString()
Symbol.prototype.valueOf()
Symbol.prototype[@@toPrimitive]
*/


/*
operations that are aware of symbols as property keys:
Property access via []
Object.getOwnPropertySymbols()
Reflect.ownKeys()
Object.assign()

// operations that ignore symbols as property keys:
Object.keys()
Object.getOwnPropertyNames()
for...in loop
*/
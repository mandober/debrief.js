/* SYMBOL
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
https://developer.mozilla.org/en-US/docs/Glossary/Symbol
http://exploringjs.com/es6/ch_symbols.html

- an instance of Symbol can be assigned to an L-value and
- it can be examined for identity. that's it.

* Generally it is used as the key for an object property when the property is intended to be private.
* A value having the data type "symbol" can be referred to as a "symbol value".
* At run-time, a symbol value is created by invoking the function Symbol(),
  which dynamically produces an anonymous, unique value.
* When a symbol value is used as the identifier in a property assignment, the property (like the symbol)
  is anonymous; and also is non-enumberable.
* The property can be accessed by using the original symbol value that created it,
  or by itterating on the result array of `Object.getOwnPropertySymbols()`

The built in function "Symbol()" is an incomplete class that returns a symbol value when called as a function
- it throws an error upon attempts to use it as a constructor with the syntax "new Symbol()",
- it has static methods for accessing JavaScript's global symbol table, and
- it has static properties for addressing certain symbols that are present in commonly used objects.

*/
var myPrivateMethod = Symbol();
this[myPrivateMethod] = function () {};



mysym; // Symbol(my own symbol)
mysym.toString(); // "Symbol(my own symbol)"
typeof mysym; // "symbol"
Object.prototype.toString.call(mysym); // "[object Symbol]"

var obj = {};
obj[mysym] = "foobar";

Object.getOwnPropertySymbols(obj);// [ Symbol(my own symbol) ]


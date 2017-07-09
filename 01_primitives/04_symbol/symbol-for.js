/* Symbol.for(key)
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for

Parameters
- key
  String, required.The key for the symbol (and also used for the description of the symbol).

Return value
  An existing symbol with the given key if found; otherwise, a new symbol is created and returned.

Description
  In contrast to Symbol(), the Symbol.for() function creates a symbol available in a global symbol registry list.Symbol.for() does also not necessarily create a new symbol on every call, but checks first if a symbol with the given key is already present in the registry.In that case, that symbol is returned.If no symbol with the given key is found, Symbol.for() will create a new global symbol.

Global symbol registry
The global symbol registry is a list with the following record structure and it is initialized empty:

A record in the global symbol registry:
Field        nameValue
[[key]]      A string key used to identify a symbol.
[[symbol]]   A symbol that is stored globally.

*/

Symbol.for('foo'); // create a new global symbol
Symbol.for('foo'); // retrieve the already created symbol

// Same global symbol, but not locally
Symbol.for('bar') === Symbol.for('bar'); // true
Symbol('bar') === Symbol('bar'); // false

// The key is also used as the description
var sym = Symbol.for('mario');
sym.toString(); // "Symbol(mario)"

// To avoid name clashes with your global symbol keys and other (library code) global symbols,
// it might be a good idea to prefix your symbols:
Symbol.for('mdn.foo');
Symbol.for('mdn.bar');


/*
Symbol.keyFor(sym)
method retrieves a shared symbol key from the global symbol registry for the given symbol.

Parameters:
sym
  Symbol, required. The symbol to find a key for.

Return value
  A string representing the key for the given symbol if one is found on the global registry; otherwise, undefined.
*/

var globalSym = Symbol.for('foo'); // create a new global symbol
Symbol.keyFor(globalSym); // "foo"

var localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// well-known symbols are not symbols registered in the global symbol registry
Symbol.keyFor(Symbol.iterator) // undefined
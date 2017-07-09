/*
SHARED SYMBOLS IN THE GLOBAL SYMBOL REGISTRY
The syntax using the Symbol() function will not create a global symbol that is available in the whole
codebase. To create symbols available across files and even across realms (each of which has its own global scope),
use these methods:
*/
// set symbol in the global symbol registry
Symbol.for()
// retrieve symbols from the global symbol registry
Symbol.keyFor()

Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true

/*
There are 3 ways to obtain a symbol:
1. Symbol()
   returns a new unique symbol each time it’s called

2. Symbol.for(string)
   This accesses a set of existing symbols called the symbol registry. Unlike unique symbols defined by Symbol(), symbols in the symbol registry are shared. If you call `Symbol.for("cat")` thirty times, it will return the same symbol each time. The registry is useful when multiple web pages, or multiple modules within the same web page, need to share a symbol.

3. Predefined symbols like `Symbol.iterator`, defined by the standard.
   A few symbols are defined by the standard itself. Each one has its own special purpose.

*/

let a = Symbol('cat')
let b = Symbol('cat')
let c = Symbol.for('cat')
let d = Symbol.for('cat')
console.log(a === b) // false
console.log(a === c) // false
console.log(c === d) // true


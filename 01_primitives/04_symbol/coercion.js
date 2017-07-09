/* Symbol type conversions

Some things to note when working with type conversion of symbols.

When trying to convert a symbol to a number, a TypeError will be thrown (e.g. +sym or sym | 0).

When using loose equality, Object(sym) == sym returns true.
Symbol("foo") + "bar" throws a TypeError (can't convert symbol to string). 
This prevents you from silently creating a new string property name from a symbol, for example.

The "safer" String(sym) conversion works like a call to Symbol.prototype.toString() with symbols,
but note that new String(sym) will throw.
*/

var s = Symbol('test');

+s; // TypeError: Cannot convert a Symbol value to a number
Number(s); // TypeError: Cannot convert a Symbol value to a number

"abc" + s; // TypeError: Cannot convert a Symbol value to a string
String(s); // 'Symbol(test)'

Object(s); // [Symbol: Symbol(test)]
Object(s) == s // true
Object(s) === s // false
Object.is(Symbol(s), s); // TypeError: Cannot convert a Symbol value to a string

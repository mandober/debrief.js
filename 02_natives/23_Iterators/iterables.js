/* ITERABLES

Iterable objects (iterables):
- Array,
- Map,
- Set,
- String,
- TypedArray,
- arguments,
- etc.

In order to be iterable, an object must implement the `@@iterator` method, meaning that the object
(or one of the objects up its prototype chain) must have a property with a `@@iterator` key which
is available via constant `Symbol.iterator`

String, Array, TypedArray, Map and Set are all built-in iterables, because each of their prototype
objects implements an @@iterator method.

Built-in APIs accepting iterables:
Map([iterable]), WeakMap([iterable]), Set([iterable]) and WeakSet([iterable])
also, Promise.all(iterable), Promise.race(iterable), and Array.from()

Some statements and expressions expect iterables:
- for...of
- spread
- yield*
- destructuring
  (* Object doesnt implement iterable protocol but it still can be destructured)


*/

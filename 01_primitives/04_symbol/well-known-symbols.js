/* Well-known Symbols

Well-known symbols are built-in Symbol values that are explicitly referenced by algorithms of this
specification. They are typically used as the keys of properties whose values serve as extension points of a
specification algorithm. Unless otherwise specified, well-known symbols values are shared by all realms.

Within this specification a well-known symbol is referred to by using a notation of the form @@name,
where “name” is one of the values listed in the table.

Table: Well-known Symbols

Specification Name
[[Description]]
Value and Purpose

@@iterator
"Symbol.iterator"
A method that returns the default iterator for an object.
Called by the semantics of the `for...of` statement.

@@toStringTag
"Symbol.toStringTag"
A String valued property that is used in the creation of the default string description of an object.
Accessed by the built-in method `Object.prototype.toString`.

@@toPrimitive
"Symbol.toPrimitive"
A method that converts an object to a corresponding primitive value.
Called by the `ToPrimitive` abstract operation.


@@hasInstance
"Symbol.hasInstance"
A method that determines if a constructor object recognizes
an object as one of the constructor's instances.
Called by the semantics of the `instanceof` operator.

@@isConcatSpreadable
"Symbol.isConcatSpreadable"
A Boolean valued property that if true indicates that an object should
be flattened to its array elements by `Array.prototype.concat`.

@@species
"Symbol.species"
A function valued property that is the constructor function that is used to create derived objects.

@@unscopables
"Symbol.unscopables"
An object valued property whose own and inherited property names are property names
that are excluded from the `with` environment bindings of the associated object.



@@match
"Symbol.match"
A regular expression method that matches the regular expression against a string.
Called by the `String.prototype.match` method.

@@replace
"Symbol.replace"
A regular expression method that replaces matched substrings of a string.
Called by the `String.prototype.replace` method.

@@search
"Symbol.search"
A regular expression method that returns the index within a string that matches the regular expression.
Called by the `String.prototype.search` method.

@@split
"Symbol.split"
A regular expression method that splits a string at the indices that match the regular expression.
Called by the `String.prototype.split` method.

*/
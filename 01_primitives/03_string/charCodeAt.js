/*
String.prototype

- String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
*/
'use strict';

String.prototype.charCodeAt()
/*
str.charCodeAt(index)

index:
  An integer greater than or equal to 0 and less than the length of the string; if it is not a number, it defaults to 0.
Returns:
  A number representing the UTF-16 code unit value of the character at the given index; NaN if index is out of range.

charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
UTF-16 code unit matches the Unicode code point for code points representable in a single UTF-16 code unit,
but might also be the 1st code unit of a surrogate pair for code points not representable in a single UTF-16
code unit, e.g. Unicode code points > 0x10000. If you want the entire code point value, use codePointAt()

*/


// char.charCodeAt(n) - returns ASCII decimal index
"abc".charCodeAt(0) // 97

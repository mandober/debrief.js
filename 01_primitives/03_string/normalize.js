/*
String.prototype

- String.prototype.normalize() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize]


*/
'use strict';


String.prototype.normalize()
/*
str.normalize([form])

The normalize() method returns the Unicode Normalization Form of a given string
(if the value isn't a string, it will be converted to one first). Where form is
specifying the Unicode Normalization Form. If omitted or undefined, "NFC" is used:
* NFC — Normalization Form Canonical Composition.
* NFD — Normalization Form Canonical Decomposition.
* NFKC — Normalization Form Compatibility Composition.
* NFKD — Normalization Form Compatibility Decomposition.

Return value
A string containing the Unicode Normalization Form of the given string.

Errors thrown
* RangeError
  A RangeError is thrown if form isn't one of the values specified above.

*/

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
var str = '\u1E9B\u0323';

// NFC
// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize('NFC'); // '\u1E9B\u0323'
str.normalize();      // same as above

// NFD
// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize('NFD'); // '\u017F\u0323\u0307'

// NFKC
// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
str.normalize('NFKC'); // '\u1E69'

// NFKD
// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize('NFKD'); // '\u0073\u0323\u0307'
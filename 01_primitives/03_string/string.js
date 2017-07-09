//! string

/*
Unlike some other languages, JavaScript makes no distinction between single-quoted strings and double-quoted strings; therefore, the escape sequences above work in strings created with either single or double quotes.


//! The String Type

The String type is the set of all ordered sequences of zero or more 16-bit unsigned integer values (“elements”) up to a maximum length of 253-1 elements. The String type is generally used to represent textual data in a running ECMAScript program, in which case each element in the String is treated as a UTF-16 code unit value. Each element is regarded as occupying a position within the sequence. These positions are indexed with nonnegative integers. The first element (if any) is at index 0, the next element (if any) at index 1, and so on. The length of a String is the number of elements (i.e., 16-bit values) within it. The empty String has length zero and therefore contains no elements.

Where ECMAScript operations interpret String values, each element is interpreted as a single UTF-16 code unit. However, ECMAScript does not place any restrictions or requirements on the sequence of code units in a String value, so they may be ill-formed when interpreted as UTF-16 code unit sequences. Operations that do not interpret String contents treat them as sequences of undifferentiated 16-bit unsigned integers. The function String.prototype.normalize (see 21.1.3.12) can be used to explicitly normalize a String value. String.prototype.localeCompare (see 21.1.3.10) internally normalizes String values, but no other operations implicitly normalize the strings upon which they operate. Only operations that are explicitly specified to be language or locale sensitive produce language-sensitive results.
Note

The rationale behind this design was to keep the implementation of Strings as simple and high-performing as possible. If ECMAScript source text is in Normalized Form C, string literals are guaranteed to also be normalized, as long as they do not contain any Unicode escape sequences.

Some operations interpret String contents as UTF-16 encoded Unicode code points. In that case the interpretation is:

    A code unit in the range 0 to 0xD7FF or in the range 0xE000 to 0xFFFF is interpreted as a code point with the same value.
    A sequence of two code units, where the first code unit c1 is in the range 0xD800 to 0xDBFF and the second code unit c2 is in the range 0xDC00 to 0xDFFF, is a surrogate pair and is interpreted as a code point with the value (c1 - 0xD800) × 0x400 + (c2 - 0xDC00) + 0x10000. (See 10.1.2)
    A code unit that is in the range 0xD800 to 0xDFFF, but is not part of a surrogate pair, is interpreted as a code point with the same value.


*/


var str = "it is an example of an example";

// indexOf
var index = str.indexOf('an'); // 6
var offset = index + 1;
var index2 = str.indexOf('an', offset); // 20

// lastIndexOf
var index3 = str.lastIndexOf('an'); // 29
offset = index3 - 1;
var index4 = str.lastIndexOf('an', offset); // 20

// split
var words = "a b c";
var w = words.split(" "); // ["a", "b", "c" ]

// slice
w = words.slice(0, 1); // "a"

// substr
var i = str.substr(9, 7); // "example"

// substring
var i2 = str.substring(9, 16); // "example"

// replace
var i3 = str.replace('example', 'experiment'); // "it is an experiment of an example"

// regex
var regex = /example/g; // g = global (replace all)
var i4 = str.replace(regex, 'experiment'); // "it is an experiment of an experiment"

// comparision
// lowercase is BEFORE uppercase

// substr()
var str = 'abcdefghij';
console.log('(1, 2): ' + str.substr(1, 2));   // '(1, 2): bc'
console.log('(-3, 2): ' + str.substr(-3, 2));  // '(-3, 2): hi'
console.log('(-3): ' + str.substr(-3));     // '(-3): hij'
console.log('(1): ' + str.substr(1));      // '(1): bcdefghij'
console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): ab'
console.log('(20, 2): ' + str.substr(20, 2));  // '(20, 2): '

//substring()
var anyString = 'Mozilla';
console.log(anyString.substring(0, 3)); // Displays 'Moz'
console.log(anyString.substring(3, 0));
console.log(anyString.substring(4, 7)); // Displays 'lla'
console.log(anyString.substring(4));
console.log(anyString.substring(7, 4));
console.log(anyString.substring(0, 6)); // Displays 'Mozill'
console.log(anyString.substring(0, 7)); // Displays 'Mozilla'
console.log(anyString.substring(0, 10));

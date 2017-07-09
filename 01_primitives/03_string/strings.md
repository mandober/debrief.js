# String

- sequences of zero or more 16-bit unsigned integer (**UTF-16**)
- max length: **2^53-1** (`MAX_SAFE_INTEGER`)
- no distinction between **single-quotes and double-quotes**
- **iterable**, array-like structure, chars i.e. letters can be accessed indivdually with `str[0]`



## The String Type

* The String type is the set of all ordered sequences of zero or more 
  **16-bit unsigned integer (UTF-16)** values ('elements')
  up to a **maximum length of 2^53-1** elements.

* The String type is generally used to represent textual data in a running ECMAScript program, in which case 
  - each element in the String is treated as a **UTF-16** code unit value.
  - Each element is regarded as occupying a position within the sequence.
  - These positions are indexed with non-negative integers.
  - The first element, if any, is at index 0, the next element, if any, at index 1, and so on.
  - The length of a String is the number of elements i.e. 16-bit values within it.
  - The empty String has length zero and therefore contains no elements.

* Where ECMAScript operations interpret String values, each element is interpreted as a single UTF-16 code unit.
  - However, ECMAScript does not place any restrictions or requirements on the sequence of code units 
    in a String value, so they may be ill-formed when interpreted as UTF-16 code unit sequences. 
  - Operations that do not interpret String contents treat them as sequences of 
    **undifferentiated 16-bit unsigned integers**.
  - The function `String.prototype.normalize` can be used to explicitly normalize a String value.
  - `String.prototype.localeCompare`internally normalizes String values, 
  - no other operations implicitly normalize the strings upon which they operate. 
  - Only operations that are explicitly specified to be language or locale sensitive 
    produce language-sensitive results.

* Note: The rationale behind this was to keep the implementation of Strings as simple and high-performing 
  as possible. If ECMAScript source text is in Normalized Form C, string literals are guaranteed to also be normalized, as long as they do not contain any Unicode escape sequences.


Some operations interpret String contents as UTF-16 encoded Unicode code points.
In that case the interpretation is:

- code unit in the range **0 to 0xD7FF** or **0xE000 to 0xFFFF**
  is interpreted as a code point with the same value.

- A sequence of 2 code units, 
  where the first code unit c1 is in the range **0xD800 to 0xDBFF**
  and the second code unit c2 is in the range **0xDC00 to 0xDFFF**
  is a surrogate pair and is interpreted as a code point with the
  value `(c1 - 0xD800) × 0x400 + (c2 - 0xDC00) + 0x10000`

- A code unit that is in the range **0xD800 to 0xDFFF**, but is not part of a surrogate pair, 
  is interpreted as a code point with the same value.


## Escapes
```
Code    Output
--------------
\0      NULL
\'      single quote
\"      double quote
\\      backslash
\n      new line
\r      carriage return
\v      vertical tab
\t      tab
\b      backspace
\f      form feed
\xXX                    the Latin-1 character
\uXXXX                  unicode codepoint
\u{X} - \u{XXXXXX}      unicode codepoint
```
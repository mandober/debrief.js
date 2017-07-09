# Escape sequences

javascript-escapes
https://mathiasbynens.be/notes/javascript-escapes

javascript-encoding
https://mathiasbynens.be/notes/javascript-encoding


Since JavaScript uses **UCS-2** encoding internally, higher code points are represented by a pair of (lower valued) “surrogate” pseudo - characters which are used to comprise the real character. To get the actual character code of these higher code point characters in JavaScript, you’ll have to do some extra work. Basically, JavaScript uses code units rather than code points.


## Single character escape sequences

There are some reserved single character escape sequences for use in strings:

\b: backspace(U + 0008 BACKSPACE)
\f: form feed (U + 000C FORM FEED)
\n: line feed (U + 000A LINE FEED)
\r: carriage return (U + 000D CARRIAGE RETURN)
\t: horizontal tab (U + 0009 CHARACTER TABULATION)
\v: vertical tab (U + 000B LINE TABULATION)
\0: null character (U + 0000 NULL)(only if the next character is not a decimal digit; else it’s an octal escape sequence)
\': single quote (U+0027 APOSTROPHE)
\": double quote (U+0022 QUOTATION MARK)
\\: backslash(U + 005C REVERSE SOLIDUS)

All single character escapes can easily be memorized using the following regular expression: \\[bfnrtv0'"\\].

Note that the escape character \ makes special characters literal.

        There’s only one exception to this rule:

    'abc\
def' == 'abcdef'; // true

    The \ followed by a new line is not a character escape sequence, but a LineContinuation.The new line doesn’t become part of the string.This is simply a way to spread a string over multiple lines (for easier code editing, for example), without the string actually including any new line characters.I suppose you could think of \ followed by a new line as an escape sequence for the empty string.

Characters without special meaning can be escaped as well (e.g. '\a' == 'a'), but this is of course not needed.However, using \u outside of a Unicode escape sequence, or \x outside of a hexadecimal escape is disallowed by the specification, and causes some engines to throw a syntax error.

    Note: IE < 9 treats '\v' as 'v' instead of a vertical tab ('\x0B').If cross- browser compatibility is a concern, use \x0B instead of \v.

Another thing to note is that the \v and \0 escapes are not allowed in JSON strings.

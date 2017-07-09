// FUNCTIONS
// predefined functions

eval()
uneval()
isFinite()
isNaN()
parseFloat()
parseInt()
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()
escape()
unescape()



parseInt(string, radix);
/*
DESCRIPTION
    Parses a string argument and returns an integer of the specified radix. If parseInt encounters a character that is not a numeral in the specified radix, it ignores it and all succeeding characters and returns the integer value parsed up to that point. parseInt truncates numbers to integer values. Leading and trailing spaces are allowed.

PARAMETERS
  string
    The value to parse.If the string argument is not a string, then it is converted to a string (using the ToString abstract operation).Leading whitespace in the string argument is ignored.

  radix
    Integer 2-36. Defaults to 10.

RETURN VALUE
    An integer number parsed from the given string. If the first character cannot be converted to a number NaN is returned.
*/


integer.toString(radix);
15..toString(16); // 'f'
// To convert number to its string literal in a particular radix

parseFloat();
// unlike parseInt, parseFloat understands exponents in input:
parseFloat('123e-2'); // 1.23
parseFloat('1e10'); // 10000000000
parseInt('1e10'); // 1

isNaN();

isFinite();
// check if value is number (not NaN and not Infinity)

var url = 'http://www.packtpub.com/script.php?q=this and that';
encodeURI(url); // "http://www.packtpub.com/script.php?q=this%20and%20that"
encodeURIComponent(url); // "http%3A%2F%2Fwww.packtpub.com%2Fscript.php%3Fq%3Dthis%20and%20that"
decodeURI();
decodeURIComponent();
escape(), unescape(); // are deprecated

eval();
// executes a string param

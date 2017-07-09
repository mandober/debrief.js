// methods of String that use regexp

String.prototype.match()


String.prototype.search()


String.prototype.split()
/* splits a String object into an array of strings by separating the string into substrings.

str.split([separator[, limit]])

Parameters:
- separator
  Optional.Specifies the character(s) to use for separating the string.The separator is treated as a string or a regular expression.If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string.If separator is an empty string, str is converted to an array of characters.

- limit
  Optional.Integer specifying a limit on the number of splits to be found.The split() method still splits on every match of separator, until the number of split items match the limit or the string falls short of separator.

Return value:
  An array of strings split at each point where the separator occurs in the given string.
*/


String.prototype.replace()


var regex = /example/g; // g = global (replace all)
var i4 = str.replace(regex, 'experiment'); // "it is an experiment of an experiment"


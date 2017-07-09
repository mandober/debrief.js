//! Regular expressions

//* Regular expressions are patterns used to match character combinations in strings.
//* In JavaScript, regular expressions are also objects.

//* These patterns are used with:
//* `exec` and `test` methods of RegExp:
RegExp.prototype.exec();
RegExp.prototype.test();

//? /.*/.exec("string")

//* `match`, `replace`, `search`, `split` methods of String:
String.prototype.match();
String.prototype.replace();
String.prototype.search();
String.prototype.split();

//? "string".match(/.*/);


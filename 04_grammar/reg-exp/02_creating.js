//! Creating a regular expression

// You construct a regular expression in one of 2 ways:

//? 1) Using a regexp literal, which consists of PATTERN enclosed between slashes:
var re = /ab+c/;
//* Regular expression literals provide compilation of the regular expression when the script is loaded.
// If the regular expression remains constant, using this can improve performance.


//? 2) Calling the constructor function, with params, as strings, for PATTERN (required) and FLAGS (optional)
var re = new RegExp('abc.*?', 'g');
//* Using the constructor function provides runtime compilation of the regular expression.
// Use the constructor function when you know the regular expression pattern will be changing,
// or you don't know the pattern and are getting it from another source, such as user input.


/*
String
String.prototype

*/

'use strict';


"abc".charAt(0) // "a"
"abc".charCodeAt(0) // 97
"abc".codePointAt(0)
str.normalize([form])

String.fromCharCode(65, 66, 67);  // "ABC"

indexOf
split
slice
slice(0, 1); // "a"
str.substr(9, 7); // "example"
str.substring(9, 16); // "example"
var i3 = str.replace('example', 'experiment'); // "it is an experiment of an example"
var regex = /example/g; // g = global (replace all)
var i4 = str.replace(regex, 'experiment'); // "it is an experiment of an experiment"


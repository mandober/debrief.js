/**
 * CLOSURES
 */

var greet = say => name => console.log(say, name);

greet('hi')('tony');
var hello = greet('hello');
hello('Jack');

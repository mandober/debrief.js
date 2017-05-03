// string

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

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


/*
tagged templates
*/
function transform(strings, ...substitutes) {
    console.log(strings[0]); // "My name is"
    console.log(substitutes[0]); // Bond
}

var firstname = "James";
var lastname = "Bond";

// to function call as:
// transform(["Name is ", ", ", " "], firstname, lastname)
transform`My name is ${lastname}, ${firstname} ${lastname}`;

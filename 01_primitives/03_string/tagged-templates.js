// tagged templates

function transform(strings, ...substitutes) {
    console.log(strings[0]); // "My name is"
    console.log(substitutes[0]); // Bond
}

var firstname = "James";
var lastname = "Bond";

// to function call as:
// transform(["Name is ", ", ", " "], firstname, lastname)
transform`Name is ${lastname}, ${firstname} ${lastname}`;



// tagged templates enables alternative function invocation
function tran() {
    console.log('function triggered');
}
tran``;
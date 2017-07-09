//! Array.from()
//* Creates a new Array instance from an array-like or iterable object.

// commonly used to convert array-likes to proper arrays
function fn() {
    let args = Array.from(arguments);
    // ...
}

// pojo with a length property and numbers for property names can also be converted to array
// non-numeric property names will remain on array as props
var obj = {
    abc: "def",
    0: 123,
    1: 222,
    2: 324,
    length: 3
};

var arr = Array.from(obj); // [113, 222, 324]

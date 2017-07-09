//! rest operator (...)

//* The rest parameter has the same syntax as the spread operator, but instead of expanding an array into individual values, it gathers individual values into an array. If there are no arguments, the rest parameter will be set to an empty array.
((...rest) => rest)(); // []
((...rest) => rest)(1); // [1]
((...rest) => rest)(1, 2); // [1, 2]

((a, ...rest) => [a, rest])(); // [ undefined, [] ]
((a, ...rest) => [a, rest])(1); // [ 1, [] ]
((a, ...rest) => [a, rest])(1, 2); // [ 1, [2] ]
((a, ...rest) => [a, rest])(1, 2, 3); // [ 1, [2, 3] ]

//* A rest parameter is particularly useful when creating a variadic function.
// Having the benefit of being arrays, rest parameters can readily replace the arguments object
// in ECMAScript 5 this we had to do:
function checkSubstrings(string) {
    for (var i = 1; i < arguments.length; i++) {
        if (string.indexOf(arguments[i]) === -1) return false;
    }
    return true;
}
checkSubstrings('this is a string', 'is', 'this'); // true

//* but now, in ES6
function checkSubstrings(string, ...keys) {
    for (var key of keys) {
        if (string.indexOf(key) === -1) return false;
    }
    return true;
}
checkSubstrings('this is a string', 'is', 'this'); // true


//* the rest parameter is not without its limitations:
//! *it must be the last parameter
((a, ...rest, c) => [a, rest, c])(1, 2, 3);
// SyntaxError: parameter after rest parameter
//! *only one rest parameter is allowed (in the function declaration)
((a, ...rest, ...c) => [a, rest, c])(1, 2, 3);
// SyntaxError: parameter after rest parameter



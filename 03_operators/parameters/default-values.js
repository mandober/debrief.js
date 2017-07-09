//! default parameters

//* parameters (or formal parameters) are what is given in the function declaration
//* arguments (or actual parameters) are what is passed to the function


//* in es5 default parameters where achieved by using logical operators:
//* Even then, some values (falsey values, especially 0) could not be passed safely.
function foo1(param1, param2) {
    param1 = param1 || 10;
    param2 = param2 || 10;
    console.log(param1, param2);
}
foo1(5); // 5, 10
foo1(); // 10, 10
foo1(0, 5); //! 10, 5

//* now, in es6, we have proper default parameters:
//* and even falsey values can be passed safely
function foo2(param1 = 10, param2 = 10) {
    console.log(param1, param2);
}
foo1(0, 5); //! 0, 5

//* And to skip an arg, call it with `undefined`:
foo1(undefined, 5); // 10, 5


//* default params can be functions:
((a, b = getValue()) => [a, b])(1, 2, 3); // [ 1, [2, 3] ]

//* or previous params
((a, b = a + 5) => [a, b])(1, 2, 3); // [ 1, [2, 3] ]

//* or even perform operations in the function declaration:
((a, b = ++a, c = a*b) => [a, b, c])(1, 2, 3); // [ 1, [2, 3] ]


//! default params have their own scope sandwitched between outer and function`s inner args




//* default values with destructuring
var pony = { foo: 123 };
var { foo = "bar" } = pony;
foo;
// 123
pony.foo = 321;
({ foo = "bar" } = pony);
foo;

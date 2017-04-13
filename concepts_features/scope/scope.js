// SCOPE

function foo(a) {
    var b = a * 2;
    function bar(c) {
        console.log(a, b, c);
    }
    bar(b * 3);
}
foo(2); // 2 4 12
/*
There are three nested scopes inherent in this code example.
It may be helpful to think about these scopes as bubbles inside of each other.


Cheating Lexical scope: eval
*/
function foo(str, a) {
    eval(str); // cheating!
    console.log(a, b);
}
var b = 2;
foo("var b = 3;", 1); // 1 3

/*
Note: eval(..) when used in a strict-mode program operates in its own lexical scope,
which means declarations made inside of the eval() do not actually modify the enclosing scope.
*/
function foo(str) {
    "use strict";
    eval(str);
    console.log(a); // ReferenceError: a is not defined
}
foo("var a = 2");


/*
    Cheating Lexical scope: with
*/
function foo(obj) {
    with (obj) {
        a = 2;
    }
}

var o1 = {
    a: 3
};

var o2 = {
    b: 3
};

foo(o1);
console.log(o1.a); // 2

foo(o2);
console.log(o2.a); // undefined
console.log(a); // 2 -- Oops, leaked global!

/*
Note: In addition to being a bad idea to use, both eval(..) and
`with` are affected (restricted) by Strict Mode. `with` is outright
disallowed, whereas various forms of indirect or unsafe eval(..)
are disallowed while retaining the core functionality.
*/

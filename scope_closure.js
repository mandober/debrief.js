// SCOPE: CLOSURES

/*
  example 1
*/
function makeAdder(x) {
    // parameter `x` is an inner variable
    // inner function `add()` uses `x`, so
    // it has a "closure" over it
    function add(y) {
        return y + x;
    };
    return add;
}

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder(1);
// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder(10);

plusOne(3); // 4 <-- 1 + 3
plusOne(41); // 42 <-- 1 + 41
plusTen(13); // 23 <-- 10 + 13



// closure
(function () {
    var secret = 0;

    var getValue = function () {
        return secret;
    };

    var setValue = function (v) {
        if (typeof v === "number") {
            secret = v;
        }
    };

    return api = { s: setValue, g: getValue };
}())
api.s(42);
api.g(); // 42


/*
    closure: ITERATORS
    Make an iterator with closure.
*/
function setup(x) {
    var i = 0;
    return function() {
        return x[i++];
    };
}

// first, pass an array to setup
var next = setup(['a', 'b', 'c']);

// call it
next(); // 'a'
next(); // 'b'
next(); // 'c'
next(); // undefined

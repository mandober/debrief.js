// AMD
// Here’s module foo with a single dependency on jquery:

// filename: foo.js
define(['jquery'], function ($) {
    // methods
    function myFunc() { };
    // exposed public methods
    return myFunc;
});


// And a little more complicated example with multiple dependencies and multiple exposed methods:
// filename: foo.js
define(['jquery', 'underscore'], function ($, _) {
    // methods
    function a() { };    //    private because it's not returned (see below)
    function b() { };    //    public because it's returned
    function c() { };    //    public because it's returned
    // exposed public methods
    return {
        b: b,
        c: c
    }
});

/*
The first part of the define is an array of dependencies, while the second part is essentially the callback function which is only executed when the dependencies are available (script loaders like RequireJS take care of that part, including figuring out where the files are located).

Note that the dependency to variable order is important (ex. jquery->$, underscore->_).

Also note that we can map the dependencies to any arbitrary variables we want here. If we change $ to $$ in the code above, all jQuery references within our function block will be $$ instead of $.

And note, most importantly, that you can’t reference the variables $ and _ outside of the function, because it’s sandboxed from other code. That’s the goal here!
*/
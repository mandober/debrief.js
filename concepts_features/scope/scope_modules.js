// SCOPE: MODULES

/*
There are two "requirements" for the module pattern to be exercised:

1) There must be an outer enclosing function, and it must be invoked at least once (each time creates a new module instance).

2) The enclosing function must return back at least one inner function, so that this inner function has closure over the private scope, and can access and/ or modify that private state.
*/

// Revealing Module pattern
function CoolModule() {
    var something = "cool",
        another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join(" ! "));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}
var foo1 = CoolModule();
foo1.doSomething(); // cool
foo1.doAnother(); // 1 ! 2 ! 3


// Singleton pattern

var foo2 = (function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join(" ! "));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
})();

foo2.doSomething(); // cool
foo2.doAnother(); // 1 ! 2 ! 3

/*
Modules are just functions, so they can receive parameters:
*/
function CoolModule2(id) {
    function identify() {
        console.log(id);
    }

    return {
        identify: identify
    };
}

var a1 = CoolModule2("a1");
var a2 = CoolModule2("a2");

a1.identify(); // "a1"
a2.identify(); // "a2"



/*
Another slight but powerful variation on the module pattern is to name the object you are returning as your public API:
*/
var food = (function CoolModule(id) {
    function change() {
        // modifying the public API
        publicAPI.identify = identify2;
    }

    function identify1() {
        console.log(id);
    }

    function identify2() {
        console.log(id.toUpperCase());
    }

    var publicAPI = {
        change: change,
        identify: identify1
    };

    return publicAPI;
})("foo module");

food.identify(); // food module
food.change();
food.identify(); // FOOD MODULE
/*
By retaining an inner reference to the public API object inside your module instance, you can modify that module instance from the inside, including adding and removing methods, properties, and changing their values.
*/



// Modern module pattern
var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get,
        modules: modules
    };
})();
/*
And here's how to use it to define some modules:
*/
MyModules.define("bar", [], function () {
    function hello(who) {
        return "Let me introduce: " + who;
    }

    return {
        hello: hello
    };
});

MyModules.define("foo", ["bar"], function (bar) {
    var hungry = "hippo";

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    };
});

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");

console.log(
    bar.hello("hippo")
); // Let me introduce: hippo

foo.awesome(); // LET ME INTRODUCE: HIPPO

/*
Both the "foo" and "bar" modules are defined with a function that returns a public API. "foo" even receives the instance of "bar" as a dependency parameter, and can use it accordingly.
*/



// ES6 MODULES

// file: bar.js

function hello(who) {
    return "Let me introduce: " + who;
}
export hello;

// file: foo.js
// import only `hello()` from the "bar" module
import hello from "bar";
var hungry = "hippo";
function awesome() {
    console.log(
        hello(hungry).toUpperCase()
    );
}
export awesome;

// working file:
// import the entire "foo" and "bar" modules
module foo from "foo";
module bar from "bar";
console.log(
    bar.hello("rhino")
); // Let me introduce: rhino
foo.awesome(); // LET ME INTRODUCE: HIPPO
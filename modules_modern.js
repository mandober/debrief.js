// MODULES
//module dependency loader/manager

// module manager
var moduleManager = (function() {
    'use strict';

    var modules = {};

    function define(name, deps, impl) {
        for (var i=0; i<deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply( impl, deps );
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    };

})();

// module bar
MyModules.define("bar", [], function () {
    function hello(who) {
        return "Let me introduce " + who;
    }
    return {
        hello: hello
    };
});

// module foo
MyModules.define("foo", ["bar"], function (bar) {
    var hungry = "hippo";
    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }
    return {
        awesome: awesome
    };
});

// usage:
var bar = MyModules.get("bar");
var foo = MyModules.get("foo");
console.log(bar.hello("hippo")); // Let me introduce hippo
foo.awesome(); // LET ME INTRODUCE HIPPO
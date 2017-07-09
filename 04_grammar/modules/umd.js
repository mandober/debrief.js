// UMD: Universal Module Definition
// https://github.com/umdjs/umd/tree/master/templates

// no dependencies
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));


// with dependencies
(function (root, factory) {
    // environment detection

    // AMD
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);

    // Node, CommonJS-like
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));

    // Browser globals (root is window)
    } else {
        root.returnExports = factory(root.jQuery);
    }

}(this, function ($) {
    // module definition

    // methods
    function myFunc() { };

    // exposed public method
    return myFunc;
}));

// Since CommonJS and AMD styles have both been equally popular, it seems there’s yet no consensus.This has brought about the push for a “universal” pattern that supports both styles, which brings us to none other than the Universal Module Definition. The pattern is admittedly ugly, but is both AMD and CommonJS compatible, as well as supporting the old-style “global” variable definition:

// And keeping in the same pattern as the above examples, the more complicated
// case with multiple dependencies and multiple exposed methods:

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    // methods
    function a() { };    // private because it's not returned (see below)
    function b() { };    // public because it's returned
    function c() { };    // public because it's returned

    // exposed public methods
    return {
        b: b,
        c: c
    }
}));


// If neither of those loaders are present, then the last option is to load the module as a global variable. This is where the root parameter comes in: the script assigns the factory function as a property of root, which in most cases is going to point to window. Here they have called the global variable returnExports, but that’s just because that’s the name of the module pattern we’re using—you can call it anything. If the script gets to this point, the module will be available as a global, and so the script can be included through an HTML script tag, and other scripts will be able to use it.

// You might have noticed an argument called b that’s getting passed to the factory function. That’s basically just a demonstration of how dependencies are handled in UMD.If your module depends on other modules, you can put them in the way b is done here.If not, you can take that part out.In fact, the actual returnExports definition includes a variant that uses no dependencies, so you can follow that one if it applies.
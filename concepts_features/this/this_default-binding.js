// this
// default binding

function foo() {
    console.log(this.a);
}
var a = 2;
foo(); // 2

/*
If strict mode is in effect, the global object is not eligible for the
default binding, so the `this` is instead set to `undefined`
*/
function foo() {
    "use strict";
    console.log(this.a);
}
var a = 2;
foo(); // TypeError: `this` is `undefined`

/*
A subtle but important detail is: even though the overall this binding rules are entirely
based on the call-site, the global object is only eligible for the default binding if the contents
of foo() are not running in strict mode; the strict mode state of the call-site of foo() is irrelevant.
*/
function foo() {
    console.log(this.a);
}
var a = 2;
(function () {
    "use strict";
    foo(); // 2
})();
// this
// binding exceptions

// `null` or `undefined` as this

function foo(a, b) {
    console.log("a:" + a + ", b:" + b);
}

// spreading out array as parameters
foo.apply(null, [2, 3]); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind(null, 2);
bar(3); // a:2, b:3

/*
DMZ object for safer `this`
The easiest way to set it up as totally empty is Object.create(null)
Object.create(null) is similar to {}, but without the delegation to
Object.prototype, so it's "more empty" than just {}
*/

function foo(a, b) {
    console.log("a:" + a + ", b:" + b);
}

// DMZ empty object
var ø = Object.create(null);

// spreading out array as parameters
foo.apply(ø, [2, 3]); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind(ø, 2);
bar(3); // a:2, b:3


/*
Indirection
Another thing to be aware of is "indirect references" to functions,
and in those cases, when that function reference is invoked, the default binding rule also applies.
One of the most common ways that indirect references occur is from an assignment:
*/
function foo() {
    console.log(this.a);
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };

o.foo(); // 3
(p.foo = o.foo)(); // 2
// but
p.foo = o.foo;
p.foo(); // 4


/*
soft binding utility
It would be nice if there was a way to provide a different default for default binding (not global or undefined), while still leaving the function able to be manually this bound via implicit binding or explicit binding techniques.
*/
if (!Function.prototype.softBind) {
    Function.prototype.softBind = function (obj) {
        var fn = this,
            curried = [].slice.call(arguments, 1),
            bound = function bound() {
                return fn.apply(
                    (!this
                        || (typeof window !== "undefined" && this === window)
                        || (typeof global !== "undefined" && this === global)
                    ) ? obj : this,
                    curried.concat.apply(curried, arguments)
                );
            };
        bound.prototype = Object.create(fn.prototype);
        return bound;
    };
}
/*
The softBind(..) utility provided here works similarly to the built-in ES5 bind(..) utility, except with our soft binding behavior. It wraps the specified function in logic that checks `this` at call-time and if it's global or undefined, uses a pre-specified alternate default (obj). Otherwise the `this` is left untouched.
It also provides optional currying.

usage:
*/
function foo() {
    console.log("name: " + this.name);
}

var obj = { name: "obj" },
    obj2 = { name: "obj2" },
    obj3 = { name: "obj3" };

var fooOBJ = foo.softBind(obj);

fooOBJ(); // name: obj

obj2.foo = foo.softBind(obj);
obj2.foo(); // name: obj2   <---- look!!!

fooOBJ.call(obj3); // name: obj3   <---- look!

setTimeout(obj2.foo, 10); // name: obj   <---- falls back to soft-binding
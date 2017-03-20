// this
// implicit binding

/*
Another rule to consider is: does the call-site have a context
object, also referred to as an owning or containing object.
*/

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2


/*
Only the top/last level of an object property
reference chain matters to the call-site.
*/
function foo() {
    console.log(this.a);
}

var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
    a: 2,
    obj2: obj2
};

obj1.obj2.foo(); // 42


/*
Implicitly Lost
One of the most common frustrations that this binding creates is when an
implicitly bound function loses that binding, which usually means it
falls back to the default binding, of either the global object or undefined,
depending on strict mode.
*/

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo; // function reference/alias!
var a = "oops, global"; // `a` is also property on global object
bar(); // "oops, global"

/*
Even though bar appears to be a reference to obj.foo, in fact, it's really
just another reference to foo itself. Moreover, the call-site is what matters,
and the call-site is bar(), which is a plain, un-decorated call and thus the
default binding applies.


another example
*/
this.x = 9; // this refers to global "window" object here in the browser
var module = {
    x: 81,
    getX: function () {
        return this.x;
    }
};

module.getX(); // 81
var retrieveX = module.getX;
retrieveX(); // returns 9 - The function gets invoked at the global scope


/*
The more subtle, more common, and more unexpected way
this occurs is when we consider passing a callback function:
*/
function foo() {
    console.log(this.a);
}

function doFoo(fn) { // `fn` is just another reference to `foo`
    fn(); // <-- call-site!
}

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global"; // `a` also property on global object
doFoo(obj.foo); // "oops, global"

/*
Parameter passing is just an implicit assignment, and since we're
passing a function, it's an implicit reference assignment, so the
end result is the same as the previous snippet.


What if the function you're passing your callback to is not your own,
but built-in to the language? No difference, same outcome.
*/
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global"; // `a` also property on global object
setTimeout(obj.foo, 100); // "oops, global"
//Where pseudo-implementation of `setTimeout()` is:
function setTimeout(fn,delay) {
    // wait (somehow) for `delay` milliseconds
    fn(); // <-- call-site!
}

/*
    also:
*/
var x = 4,
    obj = {
        x: 3,
        bar: function () {
            var x = 2;
            alert(this.x); // 3
            setTimeout(function () {
                var x = 1;
                alert(this.x); // 4
            }, 1000);
        }
    };
obj.bar();
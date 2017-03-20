// this
// EXPLICIT BINDING

/*
call, apply, bind (ES6)
They both take, as their first parameter, an object to use for the this,
and then invoke the function with that this specified. Since you are directly
stating what you want the this to be, we call it explicit binding.
*/

function foo1() {
    console.log(this.a);
}

var obj1 = {
    a: 2
};
// call-site
foo1.call(obj1); // 2


/*
   HARD-BINDING: example
*/
var prop = "global prop";

function does() {
    console.log('does: ' + this.prop);
}

var o1 = {
    prop: "abc"
};

var o2 = {
    prop: "def"
};

// another reference to does() function in memory
var original = does;

// overrides previously declared does() function
does = function () {
    // at this line `this` still points to proper object (uncomment to check)
    // console.log('overriden does: ' + this.prop);
    // but it then gets stomped over:
    original.call(o1);
}

// despite the plain call site, `this` is hard-bound to `o1` object
does(); // "abc"
// `this` will be hard-bound to `o1` even if another call-site is explicit:
does.call(o2); // "abc"



/*
   HARD-BINDING: another example
*/
function foo2() {
    console.log(this.a);
}

var obj2 = {
    a: 2
};

// create whole new function just to bind obj2 to foo2
var bar2 = function () {
    foo2.call(obj2); // <-- proper call-site!
};

// not a proper call-site!
bar2(); // 2
setTimeout(bar2, 100); // 2
// bar hard-binds foo's `this` to obj so that it cannot be overriden
bar2.call(window); // 2


/*
The typical way to wrap a function with a hard binding creates a
pass-thru of any arguments passed and any return value received:
*/
function foo3(something) {
    console.log(this.a, something);
    return this.a + something;
}

var obj3 = {
    a: 2
};

var bar3 = function () {
    return foo3.apply(obj3, arguments); // `arguments` is array-like object
};

var bb = bar3(3); // 2 3
console.log(bb); // 5



/*
Another way to express this pattern is to create a re-usable helper (pre ES5):
*/
function foo4(something) {
    console.log(this.a, something);
    return this.a + something;
}

// simple `bind` helper
function bind2(fn, obj) {
    return function () {
        return fn.apply(obj, arguments);
    };
}

var obj4 = {
    a: 2
};

var barr = bind2(foo4, obj4);
var bbb = barr(3); // 2 3
console.log(bbb); // 5



/*
   bind implemented via extending Function object with `bind` method
*/
if (!Function.prototype.binder) {
    Function.prototype.binder = function (obj) {
        console.log(this);
        var fnToBind = this; // calling function
        return function () {
            return fnToBind.apply(obj, arguments);
        };
    }
}

function foo(baz) {
    console.log(this.bar + baz); // 5
}

var obj = {
    bar: "bar"
};

// implicit call-site to binder
foo = foo.binder(obj);

foo("baz"); // "bar baz"



/*
Since hard binding is such a common pattern, it's provided with
a built-in utility as of ES5: Function.prototype.bind, and it's used like this:
*/
function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = foo.bind(obj);

var b = bar(3); // 2 3
console.log(b); // 5

/*
bind(..) returns a new function that is hard-coded to call the
original function with the this context set as you specified.

Contrary to .apply() and .call() methods, which invokes the
function right away, the .bind() method only returns a new function
that it supposed to be invoked later with a pre-configured this.

bind() makes a permanent context link and will always keep it.
A bound function cannot change its linked context when using
.call() or .apply() with a different context, or even a rebound
doesn't have any effect.

NOTE: As of ES6, the hard-bound function produced by bind() has a `.name`
property that derives from the original target function. For example:
bar = foo.bind() should have a `bar.name` value of "bound foo", which is
the function call name that should show up in a stack trace.
*/



/*
MDN bind polyfill
But the built-in Function.prototype.bind(..) as of ES5 is more sophisticated,
quite a bit so in fact.Here is the (slightly reformatted) polyfill provided
by the MDN page for bind(..):
*/

if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable"
            );
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () { },
            fBound = function () {
                return fToBind.apply(
                    (this instanceof fNOP && oThis ? this : oThis),
                    aArgs.concat(Array.prototype.slice.call(arguments))
                );
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}

/*
Note: The bind(..) polyfill shown above differs from the built-in bind()
in ES5 with respect to hard-bound functions that will be used with new
(see below for why that's useful). Because the polyfill cannot create a
function without a .prototype as the built-in utility does, there's some
nuanced indirection to approximate the same behavior. Tread carefully if
you plan to use newwith a hard-bound function and you rely on this polyfill.

The part that's allowing new overriding is:
    this instanceof fNOP && oThis ? this : oThis
and:
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

We won't actually dive into explaining how this trickery works (it's complicated
and beyond our scope here), but essentially the utility determines whether or
not the hard-bound function has been called with new (resulting in a newly
constructed object being its this), and if so, it uses that newly created this
rather than the previously specified hard binding for this.
*/

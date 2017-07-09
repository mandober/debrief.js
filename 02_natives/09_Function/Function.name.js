// Function.name

// Function statement name
//The name property returns the name of a function statement.
function doSomething() { }
doSomething.name; // "doSomething"

// Function constructor name
// Functions created with the syntax new Function(...) or just Function(...) create Function objects and their name is "anonymous".
(new Function).name; // "anonymous"

// Inferred function names
// Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).
var f = function () { };
var object = {
    someMethod: function () { }
};
console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"

// You can define a function with a name in a function expression:
var object = {
    someMethod: function object_someMethod() { }
};
console.log(object.someMethod.name); // logs "object_someMethod"
try { object_someMethod } catch (e) { console.log(e); }
// ReferenceError: object_someMethod is not defined

// You cannot change the name of a function, this property is read-only:
var object = {
    // anonymous
    someMethod: function () { }
};
object.someMethod.name = 'someMethod';
console.log(object.someMethod.name); // empty string, someMethod is anonymous

// To change it, you could use Object.defineProperty() though.


// Shorthand method names
var o = {
    foo() { }
};
o.foo.name; // "foo";

// Bound function names
// Function.bind() produces a function whose name is "bound " plus the function name.
function foo() { };
foo.bind({}).name; // "bound foo"

// Function names for getters and setters
// When using get and set accessor properties, "get" or "set" will appear in the function name.
var o = {
    get foo() { },
    set foo(x) { }
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo" 
descriptor.set.name; // "set foo";

// Function names in classes
// You can use obj.constructor.name to check the "class" of an object (but be sure to read the warnings below):
function Foo() { }  // ES2015 Syntax: class Foo {}
var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs "Foo"

// Warning: The script interpreter will set the built-in Function.name property only if a function does not have an own property called name (see section 9.2.11 of the ECMAScript2015 Language Specification).However, ES2015 specifies the static keyword such that static methods will be set as OwnProperty of the class constructor function (ECMAScript2015, 14.5.14.21.b + 12.2.6.9).

// Therefore we can't obtain the class name for virtually any class with a static method property name():

class Foo {
    constructor() { }
    static name() { }
}

// With a static name() method Foo.name no longer holds the actual class name but a reference to the name() function object. Above class definition in ES2015 syntax will behave in Chrome or Firefox similar to the following snippet in ES5 syntax:

function Foo() { }
Object.defineProperty(Foo, 'name', { writable: true });
Foo.name = function () { };

// Trying to obtain the class of fooInstance via fooInstance.constructor.name won't give us the class name at all but a reference to the static class method. Example:

var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs function name()

// You may also see from the ES5 syntax example that in Chrome or Firefox our static definition of Foo.name becomes writable.The built-in definition in the absence of a custom static definition is read- only:

Foo.name = 'Hello';
console.log(Foo.name); // logs "Hello" if class Foo has a static name() property but "Foo" if not.

// Therefore you may not rely on the built-in Function.name property to always hold a class's name.
// Symbols as function names

// If a Symbol is used a function name and the symbol has a description, the method's name is the description in square brackets.

var sym1 = Symbol("foo");
var sym2 = Symbol();
var o = {
    [sym1]: function () { },
    [sym2]: function () { }
};

o[sym1].name; // "[foo]"
o[sym2].name; // ""

// JavaScript compressors and minifiers

// Warning: Be careful when using Function.name and source code transformations, such as those carried out by JavaScript compressors (minifiers) or obfuscators.These tools are often used as part of a JavaScript build pipeline to reduce the size of a program prior to deploying it to production.Such transformations often change a function's name at build-time.

// Source code such as:

function Foo() { };
var foo = new Foo();

if (foo.constructor.name === 'Foo') {
    console.log("'foo' is an instance of 'Foo'");
} else {
    console.log('Oops!');
}

// may be compressed to:

function a() { };
var b = new a();
if (b.constructor.name === 'Foo') {
    console.log("'foo' is an instance of 'Foo'");
} else {
    console.log('Oops!');
}

// In the uncompressed version, the program runs into the truthy- branch and logs 'foo' is an instance of 'Foo'.Whereas, in the compressed version it behaves differently, and runs into the else-branch.If you rely on Function.name, like in the example above, make sure your build pipeline doesn't change function names, or don't assume a function to have a particular name.
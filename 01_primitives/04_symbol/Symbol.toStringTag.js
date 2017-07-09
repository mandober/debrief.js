// Symbol.toStringTag
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag

// The `Symbol.toStringTag` well-known symbol is a string valued property that is used in the creation of the
// default string description of an object. It is accessed internally by the `Object.prototype.toString()` method.

// Many JavaScript types have tags by default:
Object.prototype.toString.call('foo');     // "[object String]"
Object.prototype.toString.call([1, 2]);    // "[object Array]"
Object.prototype.toString.call(3);         // "[object Number]"
Object.prototype.toString.call(true);      // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null);      // "[object Null]"
// ... and more

// Others have a built-in toStringTag symbol defined:
Object.prototype.toString.call(new Map());       // "[object Map]"
Object.prototype.toString.call(function* () { }); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more


// When creating your own class, JavaScript defaults to the "Object" tag.
// Now, with the help of toStringTag, you are able to set your own custom tag:
class Validator {
    get [Symbol.toStringTag]() {
        return 'Validator';
    }
}
Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"



// test:
Symbol.toStringTag in Function // false
Symbol.toStringTag in new Function // false

Symbol.toStringTag in (function* () { }) // true
Object.prototype.toString.call(function* () { }) // "[object GeneratorFunction]"

Symbol.toStringTag in (Promise.resolve()) // true
Object.prototype.toString.call(Promise.resolve()) // "[object Promise]"

Symbol.toStringTag in (new Map()) // true
Symbol.toStringTag in (new Set()) // true
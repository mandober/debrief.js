/*
handler.get() method is a trap for getting a property value.

Syntax:
var p = new Proxy(target, {
    get: function (target, property, receiver) {...}
});

Parameters:
The following parameters are passed to the `get` method. `this` is bound to the handler.
* target - The target object.
* property - The name of the property to get.
* receiver - proxy (or an object that inherits from the proxy).

Return value - the get method can return any value.

Interceptions:
- Property access: `proxy[foo]` and `proxy.bar`
- Inherited property access: `Object.create(proxy)[foo]`
- `Reflect.get()`


Invariants:
If the following invariants are violated, the proxy will throw a TypeError:
- The value reported for a property must be the same as the value of the corresponding target
  object property if the target object property is a non-writable, non-configurable data property.
- The value reported for a property must be undefined if the corresponding target object property
  is non-configurable accessor property that has undefined as its[[Get]] attribute.

*/

// Examples:
// The following code traps getting a property value.
target = {
    n: "target"
}

handler = {
    get: function (target, prop, receiver) {
        console.log(target);
        console.log(prop);
        //console.log(receiver);
        return "none";
    }
}

var p = new Proxy(target, handler);

console.log(p["name"]);






// The following code violates an invariant.
var obj = {};

Object.defineProperty(obj, 'a', {
    configurable: false,
    enumerable: false,
    value: 10,
    writable: false
});

var p = new Proxy(obj, {
    get: function (target, prop) {
        return 20;
    }
});

p.a; // TypeError is thrown

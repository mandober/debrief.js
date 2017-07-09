# objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


### Properties of the Object constructor

    `Object.length`
Has a value of 1.

    `Object.prototype`
Allows the addition of properties to all objects of type Object.


### Methods of the Object constructor

    `Object.assign()`
Copies the values of all enumerable own properties from one or more source objects to a target object.

---
    `Object.create(proto[, propertiesObject])`
Creates a new object with the specified prototype object and properties.

    Parameters:

_proto_
The object which should be the prototype of the newly- created object.

    _propertiesObject_
Optional.If specified and not undefined, an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly- created object, with the corresponding property names.
These properties correspond to the second argument of `Object.defineProperties()`.

Return value:
A new object with the specified prototype object and properties.

---

    `Object.defineProperty()`
Adds the named property described by a given descriptor to an object.

`Object.defineProperties()`
Adds the named properties described by the given descriptors to an object.

`Object.getOwnPropertyNames()`
Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.


    `Object.setPrototypeOf(obj, prototype);`
The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

---

    `Object.keys()`
Returns an array containing the names of all of the given object's own enumerable properties.

    `Object.entries()`
Returns an array of a given object's own enumerable property [key, value] pairs.

---

    `Object.preventExtensions()`
Prevents any extensions of an object.

`Object.isExtensible()`
Determines if extending of an object is allowed.

`Object.seal()`
Prevents other code from deleting properties of an object.

`Object.freeze()`
Freezes an object: other code cannot delete or change any properties.

`Object.isFrozen()`
Determines if an object was frozen.

`Object.isSealed()`
Determines if an object is sealed.

---
### Object prototype object

    `Object.prototype.hasOwnProperty()`
Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.

`Object.prototype.propertyIsEnumerable()`
Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.


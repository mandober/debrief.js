/*
MAP
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

Map object holds key-value pairs.
Any value (both objects and primitive values) may be used as either a key or a value.

new Map([iterable])


Properties
==========

Map.length
    The value of the length property is 0.

get Map[@@species]
    The constructor function that is used to create derived objects.

Map.prototype
    Represents the prototype for the Map constructor. Allows the addition of properties to all Map objects.



Map instances
=============
All Map instances inherit from Map.prototype.


Properties
----------

Map.prototype.constructor
    Returns the function that created an instance's prototype. This is the Map function by default.

Map.prototype.size
    Returns the number of key/value pairs in the Map object.


Methods
-------

Map.prototype.clear()
    Removes all key/value pairs from the Map object.

Map.prototype.delete(key)
    Removes any value associated to the key and returns the value that Map.prototype.has(key) would have previously returned. Map.prototype.has(key) will return false afterwards.

Map.prototype.entries()
    Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.

Map.prototype.forEach(callbackFn[, thisArg])
    Calls callbackFn once for each key-value pair present in the Map object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.

Map.prototype.get(key)
    Returns the value associated to the key, or undefined if there is none.

Map.prototype.has(key)
    Returns a boolean asserting whether a value has been associated to the key in the Map object or not.

Map.prototype.keys()
    Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.

Map.prototype.set(key, value)
    Sets the value for the key in the Map object. Returns the Map object.

Map.prototype.values()
    Returns a new Iterator object that contains the values for each element in the Map object in insertion order.

Map.prototype[@@iterator]()
    Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.


*/

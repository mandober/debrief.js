'use strict';
// Object

"INDEX"
// ===================================================================
Object.entries(obj)
Object.keys(obj)
Object.values(obj)
// ===================================================================


// All OWN properties of an object
Object.getOwnPropertyNames(obj);
Object.getOwnPropertyDescriptor(obj, prop);
Object.getOwnPropertyDescriptors(obj);
Object.getOwnPropertySymbols(obj);
// define property(ies)
Object.defineProperty(obj, propKey, propDesc);
Object.defineProperties(obj, propDescObj);
// Protecting objects
Object.preventExtensions(obj)
Object.isExtensible(obj)
Object.seal(obj)
Object.isSealed(obj)
Object.freeze(obj)
Object.isFrozen(obj)






Object.keys(obj)
// *********************************************************************
// DESC: Returns an array whose elements are strings corresponding to the enumerable properties found directly upon object.
//       Ordering of the properties is the same as that given by looping over the properties of the object manually.
// RETURNS: An array of strings that represent all the enumerable properties of the given object.
// EXAMPLE:
var obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(obj)); // ['2', '7', '100']
// ===================================================================


Object.entries(obj)
// *********************************************************************
// DESC: returns an array whose elements are arrays corresponding to the enumerable property [key, value] pairs found directly
//       on object. Ordering of the properties is the same as that given by looping over the properties of the object manually.
// RETURNS: An array of the given object's own enumerable property [key, value] pairs.
// EXAMPLE:
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
// ===================================================================


Object.values(obj)
// *********************************************************************
// DESC: Object.values() returns an array whose elements are the enumerable property values found on the object.
//       Ordering of the properties is the same as that given by looping over the properties of the object manually.
// RETURNS: An array containing the given object's own enumerable property values.
// EXAMPLE:
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']
// ===================================================================




    Object.
// *********************************************************************
// DESC: 
//
// RETURNS: 
// EXAMPLE:

// ===================================================================










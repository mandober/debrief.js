'use strict';
// Object.prototype

"INDEX"
// ===================================================================
Object.prototype.toString(obj)
// ===================================================================


obj.toSource();
// *********************************************************************
// **not yet fully standardized**
// DESC: The toSource() method returns a STRING representing the source code of the object.
// EXAMPLE:
// ===================================================================

obj.toString();
// *********************************************************************
// DESC: returns a string representing the object.
//  Every object has a toString() method that is automatically called when the object is to be represented as a text value 
//  or when an object is referred to in a manner in which a string is expected. By default, the toString() method is inherited
//  by every object descended from Object. If this method is not overridden in a custom object, toString() returns "[object type]",
//  where type is the object type.
// * toString() can be used with every object and allows you to get its [[Class]] name.
// EXAMPLE:
// ===================================================================

obj.valueOf();
// *********************************************************************
// DESC: returns the primitive value of the specified object.
/* By default, the valueOf method is inherited by every object descended from Object.Every built-in core object overrides this method to return an appropriate value.If an object has no primitive value, valueOf returns the object itself.
You can use valueOf within your own code to convert a built-in object into a primitive value.When you create a custom object, you can override Object.prototype.valueOf() to call a custom method instead of the default Object method.
*/
// EXAMPLE:
// ===================================================================



// *********************************************************************
// **not yet fully standardized**
// DESC: The toSource() method returns a STRING representing the source code of the object.
// EXAMPLE:
// ===================================================================


Object.prototype.hasOwnProperty()
// Returns a boolean indicating whether an object contains the specified property as
// a direct property of that object and not inherited through the prototype chain.

Object.prototype.isPrototypeOf()
// Returns a boolean indication whether the specified object is
// in prototype chain of the object this method is called upon.

Object.prototype.propertyIsEnumerable()
// Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.

Object.prototype.toSource()
// Returns string containing the source of an object literal representing the object
// that this method is called upon; you can use this value to create a new object.

Object.prototype.toString()
// Returns a string representation of the object.
Object.prototype.toLocaleString()
// Calls toString().

Object.prototype.valueOf()
// Returns the primitive value of the specified object.

Object.prototype.watch()
// Adds a watchpoint to a property of the object.
Object.prototype.unwatch()
// Removes a watchpoint from a property of the object.

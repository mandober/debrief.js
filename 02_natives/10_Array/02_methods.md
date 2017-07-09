# 10. Array

*10.1. Array object*

*10.1.1. Array object - static properties*

`Array.length`
    The Array constructor's length property whose value is 1.

`get Array[@@species]`
    The constructor function that is used to create derived objects.

`Array.prototype`
    Allows the addition of properties to all array objects.


*10.1.2. Array object - static methods*

`Array.from()`
    Creates a new Array instance from an array-like or iterable object.

`Array.isArray()`
    Returns true if a variable is an array, if not false.
    @since ECMAScript 5.1 (ECMA-262)

`Array.of()`
    Creates a new Array instance with a variable number of
    arguments, regardless of number or type of the arguments.




*10.2. Array prototype object*

All Array instances inherit from Array.prototype.
The prototype object of the Array constructor can be modified to affect all Array instances.


*10.2.1. Array prototype object - properties*

`Array.prototype.constructor`
    Specifies the function that creates an object's prototype.

`Array.prototype.length`
    Reflects the number of elements in an array.

`Array.prototype[@@unscopables]`
    A symbol containing property names to exclude from a with binding scope.



*10.2.1. Array prototype object - methods*


*10.2.1.1. Array prototype object: MUTATOR METHODS*

`Array.prototype.unshift()`
    Adds one or more elements to the front of an array and //* returns the new length of the array.

`Array.prototype.push()`
    Adds one or more elements to the end of an array and //* returns the new length of the array.

`Array.prototype.shift()`
    Removes the first element from an array and //* returns that element.

`Array.prototype.pop()`
    Removes the last element from an array and //* returns that element.

`Array.prototype.splice()`
    Adds and/or removes elements from an array.
    - Returns an array containing the deleted elements.
    - If only one element is removed, an array of one element is returned.
    - If no elements are removed, an empty array is returned.

`Array.prototype.sort()`
    Sorts the elements of an array in place.
    //*Returns the sorted array.

`Array.prototype.copyWithin()`
    Copies a sequence of array elements within the array. 
    //*Returns the modified array.

`Array.prototype.fill()`
    Fills all the elements of an array from a start index to an end index with a static value.
    //*Returns the modified array.

`Array.prototype.reverse()`
    Reverses the order of the elements of an array in place.
    //*Returns the reversed array.


*10.2.1.2. Array prototype object: ACCESSOR methods*

These methods do not modify the array and return some representation of the array.

Array.prototype.concat()
    Returns a new array comprised of this array
    joined with other array(s) and/or value(s).

Array.prototype.includes()
    Determines whether an array contains a certain element,
    returning true or false as appropriate.

Array.prototype.indexOf()
    Returns the first (least) index of an element within the
    array equal to the specified value, or -1 if none is found.

Array.prototype.join()
    Joins all elements of an array into a string.

Array.prototype.lastIndexOf()
    Returns the last (greatest) index of an element within the
    array equal to the specified value, or -1 if none is found.

Array.prototype.slice()
    Extracts a section of an array and returns a new array.

Array.prototype.toSource()
    Returns an array literal representing the specified array;
    you can use this value to create a new array.
    Overrides the Object.prototype.toSource() method.

Array.prototype.toString()
    Returns a string representing the array and its elements.
    Overrides the Object.prototype.toString() method.

Array.prototype.toLocaleString()
    Returns a localized string representing the array and its elements.
    Overrides the Object.prototype.toLocaleString() method.


*10.2.1.3. Array prototype object - Iteration methods*

Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

Array.prototype.entries()
    Returns a new Array Iterator object that contains
    the key/value pairs for each index in the array.

Array.prototype.every()
    Returns true if every element in this array satisfies the provided testing function.

Array.prototype.filter()
    Creates a new array with all of the elements of this array
    for which the provided filtering function returns true.

Array.prototype.find()
    Returns the found value in the array, if an element in the array
    satisfies the provided testing function or undefined if not found.

Array.prototype.findIndex()
    Returns the found index in the array, if an element in the
    array satisfies the provided testing function or -1 if not found.

Array.prototype.forEach()
    Calls a function for each element in the array.

Array.prototype.keys()
    Returns a new Array Iterator that contains the keys for each index in the array.

Array.prototype.map()
    Creates a new array with the results of calling a provided function on every element in this array.

Array.prototype.reduce()
    Apply a function against an accumulator and each value of the
    array (from left-to-right) as to reduce it to a single value.

Array.prototype.reduceRight()
    Apply a function against an accumulator and each value of the 
    array (from right-to-left) as to reduce it to a single value.

Array.prototype.some()
    Returns true if at least one element in this array satisfies the provided testing function.

Array.prototype.values()
    Returns a new Array Iterator object that contains the values for each index in the array.

Array.prototype[@@iterator]()
    Returns a new Array Iterator object that contains the values for each index in the array.





```js
Array.length
Array.prototype
Array.prototype[@@unscopables]
Array.from()
Array.isArray()
Array.of()
//// Array.observe()
Array.prototype.concat()
Array.prototype.copyWithin()
Array.prototype.entries()
Array.prototype.every()
Array.prototype.fill()
Array.prototype.filter()
Array.prototype.find()
Array.prototype.findIndex()
Array.prototype.forEach()
Array.prototype.includes()
Array.prototype.indexOf()
Array.prototype.join()
Array.prototype.keys()
Array.prototype.lastIndexOf()
Array.prototype.map()
Array.prototype.pop()
Array.prototype.push()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.toLocaleString()
Array.prototype.toSource()
Array.prototype.toString()
Array.prototype.unshift()
Array.prototype.values()
Array.prototype.constructor
Array.prototype.length
Array.prototype[@@unscopables]
Array.prototype[@@iterator]()
Array.unobserve()
get Array[@@species]
```


## Inheritance:

### Function

```js
Function.arguments
Function.arity
Function.caller
Function.displayName
Function.length
Function.name
Function.prototype
Function.prototype.apply()
Function.prototype.bind()
Function.prototype.call()
Function.prototype.isGenerator()
Function.prototype.toSource()
Function.prototype.toString()
```

### Object
```js
Object.prototype.__count__
Object.prototype.__noSuchMethod__
Object.prototype.__parent__
Object.prototype.__proto__
Object.prototype.constructor
Object.prototype.__defineGetter__()
Object.prototype.__defineSetter__()
Object.prototype.__lookupGetter__()
Object.prototype.__lookupSetter__()
Object.prototype.hasOwnProperty()
Object.prototype.isPrototypeOf()
Object.prototype.propertyIsEnumerable()
Object.prototype.toLocaleString()
Object.prototype.toSource()
Object.prototype.toString()
Object.prototype.unwatch()
Object.prototype.valueOf()
Object.prototype.watch()
Object.setPrototypeOf()
```
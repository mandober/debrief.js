// Array.prototype methods

//! MUTATORS:
// Methods that modify the array in place

Array.prototype.shift()
// Removes the FIRST element from an array and RETURNS THAT ELEMENT.

Array.prototype.unshift()
// Adds one or more elements to the FRONT of an array and RETURNS THE NEW LENGTH of the array.

Array.prototype.pop()
// Removes the LAST element from an array and RETURNS THAT ELEMENT.

Array.prototype.push()
// Adds one or more elements to the END of an array and RETURNS THE NEW LENGTH of the array.




Array.prototype.splice()
// Adds and/or removes elements from an array.
// - Returns an array containing the deleted elements.
// - If only one element is removed, an array of one element is returned.
// - If no elements are removed, an empty array is returned.

Array.prototype.sort()
// Sorts the elements of an array in place. RETURNS THE SORTED ARRAY.

Array.prototype.copyWithin()
// Copies a sequence of array elements within the array. RETURNS THE MODIFIED ARRAY.

Array.prototype.fill()
// Fills all the elements of an array from a start index to an end index with a static value. RETURNS MODIFIED ARRAY.

Array.prototype.reverse()
// Reverses the order of the elements of an array in place. RETURNS THE REVERSED ARRAY.




//! ACCESSORS:

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


//! ITERATION METHODS

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

*/

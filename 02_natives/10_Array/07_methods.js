//! ARRAY METHODS

/*
//? forEach()
// Executes the provided callback once for each element present in the array in ascending order.
// * It is not invoked for index properties that have been deleted or are uninitialized (i.e.on sparse arrays).
// * If optinal `thisArg` parameter is provided, it will be used as callback's `this` value.
// * Otherwise, the value `undefined` will be used as its `this` value.
*/

arr.forEach((value, index, array) => { // returns: undefined unless...
    // your iterator
}, thisArg = "optional");

/*
// * The range of elements processed by forEach() is set before the first invocation of callback.
// * Elements that are appended to the array after the call to forEach() begins will not be visited by callback.
// * If the values of existing elements of the array are changed, the value passed to callback will be
     the value at the time forEach() visits them; elements that are deleted before being visited are not visited.
// * If elements that are already visited are removed (e.g. using shift()) during the iteration,
     later elements will be skipped.
// * forEach() executes the callback function once for each array element; unlike map() or reduce() it
     always returns the value undefined and is not chainable.
// * The typical use case is to execute side effects at the end of a chain.
// * forEach() does not mutate the array on which it is called (although callback, if invoked, may do so).
// * There is no way to stop or break a forEach() loop other than by throwing an exception.
     If you need such behavior, the forEach() method is the wrong tool. Use a plain loop instead.
// * If you are testing the array elements for a predicate and need a Boolean return value,
     you can use every() or some() instead.
// * If available, the new methods find() or findIndex() can be used for early termination upon
     true predicates as well.
*/

// example
['a', 'b', 'c'].forEach(element => console.log(element));








// slice
var s = ray.slice(1, 3); // ["hi", 3.14]

// push
ray.push('ghi');

// concat
var rays = ray.concat(ray2);

// join
rays2 = ray.join(', ');

// reverse
var rev = ray.reverse();

// sort
var sorted = ray.sort();

// map
var ch = ray.map(function (el) {
    return el + ' element';
});





// some()
// whether some element in the array passes the test implemented by the provided function.

function isBiggerThan10(element, index, array) {
    return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
// or:
[2, 5, 8, 1, 4].some((element, index, array) => element > 10); // false


// every()
// tests whether all elements in the array pass the test implemented by the provided function.
function isBigEnough(element, index, array) {
    return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
// or:
[2, 5, 8, 1, 4].every((element, index, array) => element < 10); // true


// iterator
var myArray = [1, 2, 3];
var it = myArray[Symbol.iterator]();
it.next();	//	{	value:1,	done:false	}
it.next();	//	{	value:2,	done:false	}
it.next();	//	{	value:3,	done:false	}
it.next();	//	{	done:true	}

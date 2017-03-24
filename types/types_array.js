// ARRAY

var ray = [11, 'hi', 3.14];
ray = ['abc', 'def'];
ray = [1, 2, 3];
ray[6] = 12;
ray; // [1, 2, 3, undefined × 3, 12]

// length
var l = ray.length;

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



// forEach()
// executes a provided function once for each array element
['a', 'b', 'c'].forEach(function(element) {
    console.log(element); // a // b // c
});
// or:
['a', 'b', 'c'].forEach(element => console.log(element));


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

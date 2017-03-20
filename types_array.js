// array

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
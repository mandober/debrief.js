
/**
 * ARRAY
 */

var arr = new Array();
// literal:
var arr = [
    1,
    false,
    {
        name: 'Jack',
        last: 'Bauer'
    },
    function (name) {
        var greet = 'Hi ';
        console.log(greet + name);
    },
    "hello"
];

console.log(arr);
arr[3](arr[2].name);




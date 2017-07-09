// recursively sum n numbers
// function sum(...args) {
//     if (args.length <= 2) return args[0] + args[1];
//     return args[0] + sum(...args.slice(1));
// }

// var s = sum(3, 5, 7, 9);
// console.log('sum', s);


// recursive countdown
var countdown = function (value) {
    if (value > 1) {
        //console.log(value);
        return value * countdown(value - 1);
    } else {
        return value;
    }
};
var v = countdown(5);
console.log('v: ', v);


// factorial with TCO
function factorial(n) {
    function recur(n, acc) {
        if (n == 0) {
            return acc;
        } else {
            return recur(n - 1, n * acc);
        }
    }
    return recur(n, 1);
}
factorial(6); /*?*/


// mutually recursive functions:
function even(n) {
    return (n == 0) ? true: odd(n - 1);
}
function odd(n) {
    return (n == 0) ? false : even(n - 1);
}
even(5); /*?*/
odd(5); /*?*/



(function even(n) {
    return (n === 0) ? true : !even(n - 1);
})(5); /*?*/


var evenStevens = (n) => {
    if (n === 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        return evenStevens(n-2);
    }
}
evenStevens(42); /*?*/
evenStevens(5); /*?*/

// iterator via closure

function setup(x) {
    var i = 0;
    return function () {
        return {
            value: x[i],
            done: i++ >= x.length
        }
    };
}

// first, pass an array to setup
var next = setup([22,33,44]);

// call it
console.log('next(): ', next());
console.log('next(): ', next());
console.log('next(): ', next());
console.log('next(): ', next());

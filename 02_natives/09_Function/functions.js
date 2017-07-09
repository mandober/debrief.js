// FUNCTIONS
'use strict';


/*
returning values
*/
function a() {
    console.log('a');
    return function () {
        console.log('b');
    };
}
b = a(); // 'a'
b(); // 'b'
// OR:
a()(); // 'a' 'b'

// owerwite original function (above) from outside
a = a(); // 'a' (only 1. time, then:
a(); // 'b' (always 'b')


// owerwite a function from within itself:
function a() {
    console.log(1);
    a = function () {
        console.log(2);
    };
}
a(); // 1 (only 1st time)
a(); // 2



var a = (function() {

    function someSetup() {
        var setup = 'done';
    }

    function actualWork() {
        console.log('working');
    }

    someSetup();
    return actualWork;

}());

a(); // 'working'

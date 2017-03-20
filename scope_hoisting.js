// SCOPE: HOISTING

// hoisting exception?
// var are hoisted, but finctions aren't?!

if (1 < 4) {
    function a() {
        console.log('honkey')
    }
    var x = 1;
} else {
    function b() {
        console.log('dory');
    }
    var y = 2;
}

a(); // "honkey"
b(); // TypeError: b is not a function

x; // 1
y; // undefined
z; // ReferenceError: z is not defined
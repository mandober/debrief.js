// FUNCTIONS
// Arrow functions
// Lexical scope of `this`

'use strict';


// No parameters: () => {...}
// 1 parameter: a => {...}
// More parameters: (a, b) => {...}

// before:
$("h1").click(function (event) {
    console.log('clicked');
});
// after:
$("h1").click((event) => {
    console.log('clicked');
});


// before:
const num = [1, 2, 3]
const squares = num.map(function (n) {
    return n * n;
});
console.log(squares); //[1,4,9]
// after:
const squares2 = num.map(n => n * n);





/*
    Common problem: lost `this`
*/
var obj = {
    id: "awesome",
    cool: function coolFn() {
        console.log(this.id);
    }
};
var id = "not awesome";
obj.cool(); // awesome
setTimeout(obj.cool, 3000); // not awesome

/*
The problem is the loss of this binding on the cool() function.
There are various ways to address that problem, but one often
repeated solution is var self = this;.
That might look like:
*/

var obj = {
    count: 0,
    cool: function coolFn() {
        var self = this;
        if (self.count < 1) {
            setTimeout(function timer() {
                self.count++;
                console.log("awesome?");
            }, 100);
        }
    }
};
obj.cool(); // awesome?


/*
    ES6 introduces arrow functions with "lexical this"
*/
var obj = {
    count: 0,
    cool: function coolFn() {
        if (this.count < 1) {
            setTimeout(() => {
                this.count++;
                console.log("awesome?");
            }, 100);
        }
    }
};
obj.cool(); // awesome?


// or forgetaboutit and embrace correct `this` usage:
var obj = {
    count: 0,
    cool: function coolFn() {
        if (this.count < 1) {
            setTimeout(function timer() {
                this.count++; // `this` is safe because of `bind(..)`
                console.log("more awesome");
            }.bind(this), 100); // look, `bind()`!
        }
    }
};
obj.cool(); // more awesome

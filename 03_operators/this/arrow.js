/* this in arrow functions: lexical this

`this`, unlike with normal functions has lexical scope - it takes the `this` value of surrouding scope
*/
'use strict';

// Common problem: lost `this`
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

// ES6 introduces arrow functions with "lexical this"
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

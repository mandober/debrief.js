// this

function foo() {
    console.log(this.bar);
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
};

var obj2 = {
    bar: "obj2"
};

// 1) default binding of `this` (plain call site)
foo(); // "global"

// 2) implicit (owning) binding of `this` (method call site)
obj1.foo(); // "obj1"

// 3) explicit (bind, call, apply) binding of `this` (bind call site)
foo.bind(obj2); // "obj2"

// 4) "new" binding of `this` (new call site)
new foo(); // undefined

/*
1) foo() ends up setting `this` to the global object in non-strict mode --
in strict mode,`this` would be undefined and an error would occur in accessing
the bar property.
*/





/*
lost `this`
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

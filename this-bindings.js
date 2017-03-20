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

// this
// BINDING PRECEDENCE

// implicit vs EXPLICIT binding
function foo() {
    console.log(this.a);
}

var obj1 = {
    a: 2,
    foo: foo
};

var obj2 = {
    a: 3,
    foo: foo
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2


// NEW BINDING vs implicit binding
function foo(something) {
    this.a = something;
}

var obj1 = {
    foo: foo
};

var obj2 = {};

obj1.foo(2);
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4


// NEW vs explicit (hard) binding
function foo(something) {
    this.a = something;
}

var obj1 = {};

var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); // 2

var baz = new bar(3);
console.log(obj1.a); // 2
console.log(baz.a); // 3

/*
Whoa! bar is hard-bound against obj1, but new bar(3) did not change
obj1.a to be 3 as we would have expected. Instead, the hard bound
(to obj1) call to bar(..) is able to be overridden with new. Since
new was applied, we got the newly created object back, which we
named baz, and we see in fact that baz.a has the value 3.
*/
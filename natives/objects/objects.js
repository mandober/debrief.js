'use strict';
// objects


// objects always create a copy of the reference
// on assignment or passing (pass-by-reference)
function foo(wrapper) {
    wrapper.a = 42;
}
var obj = {
    a: 2
};
foo(obj);
obj.a; // 42
// here, `wrapper` is another reference to the object that `obj` also refrences.
// (this is an attempt to pass scalar by reference so the function can affect it directly)

var a = 2;
// `new` is NOT optional
var b = new Number(a); // Number {[[PrimitiveValue]]: 2}
// same as (here `new` is optional):
var c = new Object(a); // Number {[[PrimitiveValue]]: 2}
// but underlying scalar primitive value is not mutable!








// method within the object (bad pattern for re-useage of this object)
var person = {
    f: "Jack",
    l: "Bauer",
    getName: function () {
        //return 'name is ' + this.l + ', ' + this.f + this.l;
        return `Name is ${this.l},  ${this.f} ${this.l}`;
    }
}
person.getName(); // Jack Bauer

// method outside, associated
function sayName() {
    console.log(`My name is ${this.f} ${this.l}`)
}
person.sayMyName = sayName; // associate sayName() function to this object's method sayMyName()

// USAGE
person.sayMyName();
person.getName();

// Deleting property:
delete person.f;
person.f; // undefined


// Object.defineProperty()
var myObject = {};
Object.defineProperty(myObject, "a", {
    value: 2,
    writable: true,
    configurable: true,
    enumerable: true
});
myObject.a; // 2


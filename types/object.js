// OBJECTS
// basics

// method within the object (bad pattern)
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


// OO
// Prototypal Inheritance

function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function () {
    return this.name;
};

function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}

// test
Bar.prototype.beforeDest = function () {
    return 'before destruction';
};
var bef = new Bar("bef", "obj bef");
console.log('1. before destruction: ' + mandober.listOwnProps(Bar));


// 1) make a new `Bar.prototype` linked to `Foo.prototype`:
//    (and rids of `Bar.prototype.constructor`)
//Bar.prototype = Object.create(Foo.prototype);

// 2) without throwing away original Bar.prototype object (although not a standardized way):
//Bar.prototype.__proto__ = Foo.prototype;

// 3) standardized in ES6:
Object.setPrototypeOf(Bar.prototype, Foo.prototype);

// test
console.log('2. after destruction: ' + mandober.listOwnProps(Bar));


Bar.prototype.myLabel = function () {
    return this.label;
};

// test
console.log('3. after Bar.prototype method: ' + mandober.listOwnProps(Bar));

var a = new Bar("a", "obj a");

a.myName(); // "a"
a.myLabel(); // "obj a"


/*
    Inspection
*/
// in the entire [[Prototype]] chain of `a`, does the object `Foo.prototype` ever appear?
a instanceof Foo; // true
a instanceof Bar; // true
a instanceof Object; // true

// in the entire [[Prototype]] chain of `a`, does the object `Foo.prototype` ever appear?
Foo.prototype.isPrototypeOf(a); // true

// We can also directly retrieve the [[Prototype]] of an object (as of ES6):
Object.getPrototypeOf(a); // Foo.prototype
Object.getPrototypeOf(a) === Foo.prototype; // true

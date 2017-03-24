// OO
// [[Prototype]] chain

// [[Prototype]] is an internal property
// __proto__ is a public property, in fact, a get/set method

// Inspection:
// OBJ instanceof FN
// PROTOTYPE.isPrototypeOf(OBJ)
// Object.getPrototypeOf(OBJ)

// in the entire [[Prototype]] chain of `a`, does the object `Foo.prototype` ever appear?
a instanceof Foo; // true
a instanceof Bar; // true
a instanceof Object; // true

// in the entire [[Prototype]] chain of `a`, does the object `Foo.prototype` ever appear?
Foo.prototype.isPrototypeOf(a); // true

// We can also directly retrieve the [[Prototype]] of an object (as of ES6):
Object.getPrototypeOf(a); // Foo.prototype
Object.getPrototypeOf(a) === Foo.prototype; // true


// Linkage
// Object.create(OBJ)
// Object.setPrototypeOf(OBJ, PROTOTYPE|null)

var a = {
    z: 1
}
var b = Object.create(a);
console.log('b.z: ', b.z); // 1
b.z = 42;
console.log('b.z: ', b.z); // 42
console.log('a.z: ', a.z); // 1

// make empty obj without [[Prototype]] linkage
var u = Object.create(null);
u.a = 1;
u.b = 2;
u.c = 3;

// make dictionary
var g = {
    a: 1,
    b: 2,
    c: 3
};
// unlink `g` (make flat data storage i.e. dictionary)
Object.setPrototypeOf(g, null);



// Object.create(OBJ, PROPS)
// The second argument to Object.create() specifies property names
// to add to the newly created object, with property descriptors.
var anotherObject = {
    a: 2
};

var myObject = Object.create(anotherObject, {
    b: {
        enumerable: false,
        writable: true,
        configurable: false,
        value: 3
    },
    c: {
        enumerable: true,
        writable: false,
        configurable: false,
        value: 4
    }
});

myObject.hasOwnProperty("a"); // false
myObject.hasOwnProperty("b"); // true
myObject.hasOwnProperty("c"); // true
myObject.a; // 2
myObject.b; // 3
myObject.c; // 4
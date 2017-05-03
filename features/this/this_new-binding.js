// this
// NEW BINDING

/*
When a function is invoked with new in front of it, otherwise known
as a constructor call, the following things are done automatically:

1) a brand new object is created (aka, constructed) out of thin air
2) the newly constructed object is [[Prototype]]-linked
3) the newly constructed object is set as the `this` binding for that function call
4) unless the function returns its own alternate object, the new-invoked function
   call will automatically return the newly constructed object.
*/

function foo(a) {
    this.a = a;
}

var bar = new foo(2);
console.log(bar.a); // 2
/*
By calling foo() with new in front of it, we've constructed a new
object and set that new object as the `this` for the call of foo().



Make sure to use new operator in cases when a constructor call is expected:
*/

function Vehicle(type, wheelsCount) {
    if (!(this instanceof Vehicle)) {
        throw Error('Error: Incorrect invocation');
    }
    this.type = type;
    this.wheelsCount = wheelsCount;
    return this;
}

// Constructor invocation
var car = new Vehicle('Car', 4);
car.type               // => 'Car'  
car.wheelsCount        // => 4  
car instanceof Vehicle // => true

// Function invocation. Generates an error.
var brokenCar = Vehicle('Broken Car', 3);

/*
new Vehicle('Car', 4) works well: a new object is created and initialized,
because new keyword is present in the constructor invocation.

A verification is added in the constructor function: this instanceof Vehicle,
to make sure that execution context is a correct object type.If this is not a
Vehicle, then an error is generated.Whenever Vehicle('Broken Car', 3) is executed
(without new) an exception is thrown: Error: Incorrect invocation.
*/
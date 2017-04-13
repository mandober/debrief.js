// OO
// Parasitic Inheritance

/*
A variation on this explicit mixin pattern, which is both in some
ways explicit and in other ways implicit, is called "parasitic inheritance",
popularized mainly by Douglas Crockford.
*/

// "Traditional JS Class" `Vehicle`
function Vehicle() {
    this.engines = 1;
}

Vehicle.prototype.ignition = function () {
    console.log("Turning on my engine.");
};

Vehicle.prototype.drive = function () {
    this.ignition();
    console.log("Steering and moving forward!");
};

// "Parasitic Class" `Car`
function Car() {
    // first, `car` is a `Vehicle`
    var car = new Vehicle();

    // now, let's modify our `car` to specialize it
    car.wheels = 4;

    // save a privileged reference to `Vehicle::drive()`
    var vehDrive = car.drive;

    // override `Vehicle::drive()`
    car.drive = function () {
        vehDrive.call(this);
        console.log("Rolling on all " + this.wheels + " wheels!");
    };

    return car;
}

var myCar = new Car();

myCar.drive(); // Turning on my engine. // Steering and moving forward! // Rolling on all 4 wheels!

/*
As you can see, we initially make a copy of the definition from the Vehicle "parent class" (object), then mixin our "child class" (object) definition (preserving privileged parent- class references as needed), and pass off this composed object car as our child instance.

Note: when we call new Car(), a new object is created and referenced by Cars this reference (see Chapter 2).But since we don't use that object, and instead return our own car object, the initially created object is just discarded. So, Car() could be called without the new keyword, and the functionality above would be identical, but without the wasted object creation/garbage-collection.
*/
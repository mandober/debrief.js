// OO
// mixins
// explicit mixins

/*
Since JavaScript will not automatically copy behavior from Vehicle to Car,
we can instead create a utility that manually copies. Such a utility is
often called extend() by many libraries. Or manually:
*/

// vastly simplified `mixin()` example:
// (functions are not actually duplicated, only references to the functions are copied)
function mixin(sourceObj, targetObj) {
    for (var key in sourceObj) {
        // only copy if not already present
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
}

var Vehicle = {
    engines: 1,
    ignition: function () {
        console.log("Turning on my engine.");
    },
    drive: function () {
        this.ignition();
        console.log("Steering and moving forward!");
    }
};

// call mixin(sourceObj, targetObj)
var Car = mixin(Vehicle, {
    wheels: 4,
    drive: function () {
        // call 'parents' method; must use `call(this)` instead of relative call like 'super':
        Vehicle.drive.call(this);
        console.log("Rolling on all " + this.wheels + " wheels!");
    }
});

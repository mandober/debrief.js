// OO
// __proto__
// standard from ES6.

// Roughly, we could envision .__proto__ implemented like this:
Object.defineProperty(Object.prototype, "__proto__", {
    get: function () {
        return Object.getPrototypeOf(this);
    },
    set: function (o) {
        // setPrototypeOf(..) as of ES6
        Object.setPrototypeOf(this, o);
        return o;
    }
});
someObj.__proto__; // get
someObj.__proto__ = otherPrototypeObject; // set
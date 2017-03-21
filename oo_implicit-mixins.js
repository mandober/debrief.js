// OO
// Implicit Mixins

var Something = {
    cool: function () {
        this.greeting = "Hello World";
        this.count = this.count ? this.count + 1 : 1;
    }
};

Something.cool();
Something.greeting; // "Hello World"
Something.count; // 1

var Another = {
    cool: function () {
        // implicit mixin of `Something` to `Another`
        Something.cool.call(this);
    }
};

Another.cool();
Another.greeting; // "Hello World"
Another.count; // 1 (not shared state with `Something`)

/*
With `Something.cool.call(this)`, which can happen either in a "constructor" call (most common) or in a method call (shown here), we essentially "borrow" the function Something.cool() and call it in the context of Another (via its this binding; see Chapter 2) instead of Something. The end result is that the assignments that Something.cool() makes are applied against the Another object rather than the Something object. So, it is said that we "mixed in" Somethings behavior with (or into) Another.
*/

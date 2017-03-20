var obj = {
    id: "awesome",
    cool: function coolFn() {
        console.log(this.id);
    }
};
var id = "not awesome";
obj.cool(); // awesome
setTimeout(obj.cool, 3000); // not awesome
/*
The problem is the loss of this binding on the cool() function.
There are various ways to address that problem, but one often
repeated solution is var self = this;.
That might look like:
*/
var obj = {
    count: 0,
    cool: function coolFn() {
        var self = this;
        if (self.count < 1) {
            setTimeout(function timer() {
                self.count++;
                console.log("awesome?");
            }, 100);
        }
    }
};
obj.cool(); // awesome?

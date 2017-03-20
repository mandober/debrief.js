// object

var person = {
    f: "Jack ",
    l: "Bauer",
    getName: function () {
        return this.f + this.l;
    }
}
person.getName(); // Jack Bauer


// associated function

var o1 = {
    f: "Nina ",
    l: "Mayers"
}

var o2 = {
    f: "Jack ",
    l: "Bauer"
}

function sayName() {
    console.log(this.f + this.l)
}

o1.sayMyName = sayName; // associate sayName() function to this object's method sayMyName()
o2.sayMyName = sayName;

o1.sayMyName();
o2.sayMyName();
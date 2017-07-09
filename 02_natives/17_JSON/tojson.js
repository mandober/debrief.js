/*
toJSON()
If JSON.stringify() encounters an object that has a toJSON method,
it uses that method to obtain a value to be stringified
*/
JSON.stringify({ toJSON: function () { return 'Cool' } }) // '"Cool"'

// Dates already have a toJSON method that produces an ISO 8601 date string:
JSON.stringify(new Date('2011-07-29')) // '"2011-07-28T22:00:00.000Z"'


// method returns a JSON-safe version of the object
var o = {};

var a = {
    b: 42,
    c: o,
    d: function () { }
};

// create a circular reference inside `a`
o.e = a;

// would throw an error on the circular reference
// JSON.stringify( a );
// define a custom JSON value serialization

a.toJSON = function () {
    // only include the `b` property for serialization
    return { b: this.b };
};

JSON.stringify(a); // "{"b":42}

var a = {
    val: [1, 2, 3],
    // probably correct!
    toJSON: function () {
        return this.val.slice(1);
    }
};

var b = {
    val: [1, 2, 3],
    // probably incorrect!
    toJSON: function () {
        return "[" + this.val.slice(1).join() + "]";
    }
};
JSON.stringify(a); // "[2,3]"
JSON.stringify(b); // ""[2,3]""

/*
REPLACER
If replacer is an array, it should be an array of strings, each of which will specify a
property name that is allowed to be included in the serialization of the object .If a property
exists that isn't in this list, it will be skipped.
If replacer is a function, it will be called once for the object itself, and then once for each
property in the object, and each time is passed two arguments, key and value.To skip a
key in the serialization, return undefined. Otherwise, return the value provided.
*/
var a = {
    b: 42,
    c: "42",
    d: [1, 2, 3]
};
JSON.stringify(a, ["b", "c"]); // "{"b":42,"c":"42"}"
JSON.stringify(a, function (k, v) {
    if (k !== "c") return v;
}); // "{"b":42,"d":[1,2,3]}"

/*
SPACER
A third optional argument can also be passed to JSON.stringify(..), called space, which is
used as indentation for prettier human- friendly output.space can be a positive integer to
indicate how many space characters should be used at each indentation level.Or, space
can be a string , in which case up to the first ten characters of its value will be used for
each indentation level.
*/
var a = {
    b: 42,
    c: "42",
    d: [1, 2, 3]
};
JSON.stringify(a, null, 3);
// "{
// "b": 42,
// "c": "42",
// "d": [
// 1,
// 2,
// 3
// ]
// }"
JSON.stringify(a, null, "-----");
// "{
// -----"b": 42,
// -----"c": "42",
// -----"d": [
// ----------1,
// ----------2,
// ----------3
// -----]
// }"

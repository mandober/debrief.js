// COERCION

/*
TO BOOLEAN
*/
Boolean(undefined); // false
Boolean(null); // false
Boolean(false); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(+0); // false
Boolean(NaN); // false
Boolean(""); // false
Boolean(); // false
Boolean(document.all); // false



/*
TO NUMBER
*/
var n = "12";
+n; // 12

var a = {
    valueOf: function () {
        return "42";
    }
};
var b = {
    toString: function () {
        return "42";
    }
};
var c = [4, 2];
c.toString = function () {
    return this.join(""); // "42"
};

Number(n); // 12
Number(a); // 42
Number(b); // 42
Number(c); // 42
Number(""); // 0
Number([]); // 0
Number(["abc"]); // NaN
Number(null); // 0
Number(false); // 0
Number(true); // 1

/*
Date To number
*/
var d = new Date();
d; // Sun Mar 26 2017 00:02:17 GMT+ 0100(Central Europe Standard Time)
+d; // 1490482937790
new Date().getTime() === +new Date(); // true


// JSON.stringify(VAL [, REPLACER [, SPACER]])
JSON.stringify(42); // "42"
JSON.stringify("42"); // ""42"" (a string with a quoted string value in it)
JSON.stringify(null); // "null"
JSON.stringify(true); // "true"
JSON.stringify(undefined); // undefined
JSON.stringify(function () { }); // undefined
JSON.stringify([1, undefined, function () { }, 4]); // "[1,null,null,4]"
JSON.stringify({ a: 2, b: function () { } }); // "{"a":2}

// toJSON() 
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

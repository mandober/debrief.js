// COERCION


// TO NUMBER
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



// Date To number
var d = new Date();
d; // Sun Mar 26 2017 00:02:17 GMT+ 0100(Central Europe Standard Time)
+d; // 1490482937790
new Date().getTime() === +new Date(); // true


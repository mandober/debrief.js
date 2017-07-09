tools.types = function () {
    'use strict';

    var typo = function (x) {
        // primitives
        let t = typeof x;
        if (t === "undefined") return "undefined";
        if (t === "string") return "string";
        if (t === "boolean") return "boolean";
        if (t === "symbol") return "symbol";
        if (t === "number") {
            if (Number.isInteger(x)) {
                if (!Number.isSafeInteger(x)) return "int (unsafe)";
                return "int";
            }
            if (Number.isFinite(x)) return "float";
            if (Number.isNaN(x)) return "NaN";
            return "number";
        }
        // builtins
        let tt = Object.prototype.toString.call(x);
        if (tt === "[object Null]") return "null";
        return Object.prototype.toString.call(x).slice(1, -1);
    }

    return {
        typo: typo
    };

}();
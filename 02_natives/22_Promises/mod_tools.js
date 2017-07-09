var tools = function tools() {
    'use strict';

    var isNumber = function (v) {
        return typeof v === 'number' && !Number.isNaN(v) && isFinite(v);
    }

    var isInteger = function (v) {
        if (!isFinite(v)) return false;
        if (v % 1 > 0) return false;
        return true;
    }

    return {
        isNum: isNumber,
        isInt: isInteger,
    };
}();
'use strict';

// iterators

var table = {
    1: 11,
    2: 22,
    3: 33
};

table[Symbol.iterator] = function () {
    var _this = this;
    var keys = null;
    var index = 0;
    return {
        next: function () {
            if (keys === null) keys = Object.keys(_this).sort();
            return {
                value: keys[index],
                done: index++ <= keys.length
            };
        }
    }
};


for (var key of table) {
    console.log(key + ' = ' + table[key]);
}

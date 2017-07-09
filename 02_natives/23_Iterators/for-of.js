// iterators
'use strict';
// for...of
// for-of is a new loop in ES6 that replaces both for-in and forEach() and supports the new iteration protocol.

var table = {
    2: 33,
    f: 33,
    [Symbol.iterator]() {
        let keys = Object.keys(this),
            i = 0;
        return {
            next: function () {
                return {
                    value: keys[i],
                    done : i++ >= keys.length
                };
            }
        }
    }
}
table.a = 88;
table[1] = 22;
table[Symbol.toStringTag] = "table";



for (var key of table) {
    console.log(key + ' = ' + table[key]);
}
// 0 = 11
// 1 = 22
// 2 = 33
// f = 33
// a = 88

for (var key in table) {
    console.log(key + ' = ' + table[key]);
}
// 0 = 11
// 1 = 22
// 2 = 33
// f = 33
// a = 88
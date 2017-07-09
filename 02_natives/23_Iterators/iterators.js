'use strict';
// iterators
var table = {
    0: 11,
    1: 22,
    2: 33,
    [Symbol.toStringTag]: "table",

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

for (var key of table) {
    console.log(key + ' = ' + table[key]);
}

var it = table[Symbol.iterator]();
console.log('it.next(): ', it.next());
console.log('it.next(): ', it.next());
console.log('it.next(): ', it.next());
console.log('it.next(): ', it.next());

Object.prototype[Symbol.toStringTag] = "Object.prototype";


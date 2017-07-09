// JSON

JSON.stringify(value, replacer, space){}

// REPLACER
// optional parameter replacer is used to change the value before stringifying it.
// replacer can be a function (node visitor) or a whitelist.

// 1) node visitor - transforms the tree of values before it is stringified:
function replacer(key, value) {
    if (typeof value === 'number') {
        value = 2 * value;
    }
    return value;
}
JSON.stringify({ a: 5, b: [2, 8] }, replacer) // '{"a":10,"b":[4,16]}'

// 2) whitelist -of property keys that hides all properties (of non-array objects) whose keys are not in the list:
JSON.stringify({ foo: 1, bar: { foo: 1, bar: 1 } }, ['bar']) // '{"bar":{"bar":1}}'
// The whitelist has no effect on arrays:
JSON.stringify(['a', 'b'], ['0']) // '["a","b"]'


// SPACE
// The optional parameter space influences the formatting of the output.
// Without this parameter, the result of stringify is a single line of text:
console.log(JSON.stringify({ a: 0, b: ['\n'] })) // { "a":0, "b":["\n"] }

// With space, newlines are inserted and each level of nesting via arrays and 
// objects increases indentation. There are two ways to specify how to indent:

// 1) A number
//    Multiply the number by the level of indentation and indent the line by as many spaces.
//    Numbers smaller than 0 are interpreted as 0; numbers larger than 10 are interpreted as 10:
console.log(JSON.stringify({ a: 0, b: ['\n'] }, null, 2))
/*
{
    "a": 0,
        "b": [
            "\n"
        ]
}
*/

// 2) A string
//    To indent, repeat the given string once for each level of indentation.
//    Only the first 10 characters of the string are used:
console.log(JSON.stringify({ a: 0, b: ['\n'] }, null, '|--'))
/*
{
    |--"a": 0,
    |--"b": [
    |--|--"\n"
        | --]
}
*/
// Therefore, the following invocation of JSON.stringify() prints an object as a nicely formatted tree:
JSON.stringify(data, null, 4)


// IGNORED DATA:
// * In objects, JSON.stringify() only considers enumerable own properties
// * functions are ignored
// * symbols are ignored
JSON.stringify(function () { }) // undefined
// * Properties whose values are unsupported are simply ignored:
JSON.stringify({ foo: function () { } }) // '{}'
// * Unsupported values in arrays are stringified as nulls:
JSON.stringify([function () { }]) // '[null]'


// examples:
JSON.stringify({});                  // '{}'
JSON.stringify(true);                // 'true'
JSON.stringify('foo');               // '"foo"'
JSON.stringify([1, 'false', false]); // '[1,"false",false]'
JSON.stringify({ x: 5 });            // '{"x":5}'
JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)) // '"2006-01-02T15:04:05.000Z"'
JSON.stringify({ x: 5, y: 6 });      // '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String('false'), new Boolean(false)]); // '[1,"false",false]'
JSON.stringify({ x: [10, undefined, function () { }, Symbol('')] }); // '{"x":[10,null,null,null]}' 

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') }); // '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' }); // '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]); // '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function (k, v) {
    if (typeof k === 'symbol') {
        return 'a symbol';
    }
}); // '{}'

// Non-enumerable properties:
JSON.stringify(Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }));
// '{"y":"y"}'


// JSON.stringify (VAL [, REPLACER [, SPACER]])
JSON.stringify(42); // "42"
JSON.stringify("42"); // ""42"" (a string with a quoted string value in it)
JSON.stringify(null); // "null"
JSON.stringify(true); // "true"
JSON.stringify(undefined); // undefined
JSON.stringify(function () { }); // undefined
JSON.stringify([1, undefined, function () { }, 4]); // "[1,null,null,4]"
JSON.stringify({ a: 2, b: function () { } }); // "{"a":2}


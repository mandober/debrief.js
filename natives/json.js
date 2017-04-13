// JSON

JSON.stringify(value, replacer, space)

// REPLACER
// optional parameter replacer is used to change the value before stringifying it.
// replacer can be a function (node visitor) or a whitelist.

// 1) node visitor
//    that transforms the tree of values before it is stringified:

function replacer(key, value) {
    if (typeof value === 'number') {
        value = 2 * value;
    }
    return value;
}
JSON.stringify({ a: 5, b: [2, 8] }, replacer) // '{"a":10,"b":[4,16]}'

// 2) whitelist
//    of property keys that hides all properties (of non-array objects) whose keys are not in the list:
JSON.stringify({ foo: 1, bar: { foo: 1, bar: 1 } }, ['bar']) // '{"bar":{"bar":1}}'

// The whitelist has no effect on arrays:
JSON.stringify(['a', 'b'], ['0']) // '["a","b"]'



// SPACE
// The optional parameter space influences the formatting of the output.
// Without this parameter, the result of stringify is a single line of text:
console.log(JSON.stringify({ a: 0, b: ['\n'] })) // { "a":0, "b":["\n"] }

// With space, newlines are inserted and each level of nesting via arrays and 
// objects increases indentation.There are two ways to specify how to indent:

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
JSON.stringify(function () { }) // undefined
// * Properties whose values are unsupported are simply ignored:
JSON.stringify({ foo: function () { } }) // '{}'
// * Unsupported values in arrays are stringified as nulls:
JSON.stringify([function () { }]) // '[null]'


/*
toJSON()
If JSON.stringify() encounters an object that has a toJSON method,
it uses that method to obtain a value to be stringified
*/
JSON.stringify({ toJSON: function () { return 'Cool' } }) // '"Cool"'

// Dates already have a toJSON method that produces an ISO 8601 date string:
JSON.stringify(new Date('2011-07-29')) // '"2011-07-28T22:00:00.000Z"'


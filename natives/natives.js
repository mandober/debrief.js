// NATIVE OBJECTS
// complex/compound/natives/built-ins

// Object, Function, String*, Number*, Boolean*, Date, ...are all subtypes of Object
// (*this is String/Number/Boolean object, as in [object String], not
// the string/number/boolean PRIMITIVE value.

// primitive string:
var str = "abc"; // "abc"
// native String (object):
var strObj = new String("abc");
// chrome: String { [[PrimitiveValue]]: "abc", 0: "a", 1: "b", 2: "c", length: 3 }
// firefox: String { "abc", 4 more… }

// primitive number:
var num = 2; // 2
// native Number (object):
var numObj = new Number(2);
// chrome: Number { [[PrimitiveValue]]: 2 }
// firefox: Number { 2 }

// primitive boolean:
var bool = true; // true
// native Boolean (object):
var boolObj = new Boolean(true);
// chrome: Boolean { [[PrimitiveValue]]: true }
// firefox: Boolean { true }


/*
Commonly used natives: String(), Number(), Boolean(), Array(),
Object(), Function(), RegExp(), Date(), Error(), Symbol()
but there's whole lot more.

BOXING
Only String(), Number(), Boolean() natives have their counterpairs in primitives -- a primitive can access all methods available to natives because js "boxes" the primitive value into object for the method call.
*/
var strObj = new String("abc");
strObj.indexOf('b'); // 1
// only natives have methods available, but due to boxing, primitives can use them too:
var str = "abc";
str.indexOf('b'); // 1

strObj.toString(); // "abc"
strObj.valueOf(); // "abc"
typeof strObj; // "object" (not "String")
strObj instanceof String; // true
strObj.prop1 = 12; // it's an object, so properties can be added
strObj; // String {0: "a", 1: "b", 2: "c", prop1: 12, length: 3, [[PrimitiveValue]]: "abc"}


// to manually box a primitive value, use the Object() function (with or without `new` keyword):
var a = "abc";
var b = new String(a);
var c = Object(a);
var d = new Object(a);
typeof a; // "string"
typeof b; // "object"
typeof c; // "object"
typeof d; // "object"
b instanceof String; // true
c instanceof String; // true
d instanceof String; // true
Object.prototype.toString.call(b); // "[object String]"
Object.prototype.toString.call(c); // "[object String]"
Object.prototype.toString.call(d); // "[object String]"


/*
[[Class]]
Values that are typeof "object" are additionally tagged with an 
internal[[Class]] property that cannot be accessed directly,
but can generally be revealed indirectly by borrowing the default
`Object.prototype.toString()` method called against the value:
*/
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(/regex-literal/i); // "[object RegExp]"
Object.prototype.toString.call(strObj); // "[object String]" (due to boxing)

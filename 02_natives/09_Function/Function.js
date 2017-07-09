/*
Function()
Function constructor creates a new Function object.
In JavaScript every function is actually a Function object.

[new] Function([arg1[, arg2[, ...argN]],] functionBody)

Parameters:
arg1, arg2, ... argN
    Names to be used by the function as formal argument names.Each must be a string that corresponds to a valid JavaScript identifier or a list of such strings separated with a comma; for example "x", "theValue", or "a,b".

functionBody
    A string containing the JavaScript statements comprising the function definition.

Description:
    Function objects created with the Function constructor are parsed when the function is created. This is less efficient than declaring a function with a function expression or function statement and calling it within your code, because such functions are parsed with the rest of the code.
    All arguments passed to the function are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed.
    Invoking the Function constructor as a function (without using the new operator) has the same effect as invoking it as a constructor.


Properties and Methods:
The global `Function` object has no methods or properties of its own, however, since it is a function itself it does inherit some methods and properties through the prototype chain from `Function.prototype`.


Function prototype object:

**Properties:**

`Function.length`
    Specifies the number of arguments expected by the function.

`Function.name`
    The name of the function.

*  `Function.prototype.constructor`
    Specifies the function that creates an object's prototype. See Object.prototype.constructor for more details.

**Deprecated properties:**

* `Function.caller` DEPRECATED
    Specifies the function that invoked the currently executing function.

* `Function.arity` OBSOLETE (not in node 8)
    number of args expected by the function. Obsolete, but not yet removed - use the length property instead.

* `Function.arguments` DROPPED
    An array corresponding to the arguments passed to a function. This is deprecated as property of Function, use the arguments object available within the function instead.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments

* `Function.displayName` UNSTANDARD (not in node 8)
    The display name of the function.



Methods

Function.prototype.apply()
    Calls a function and sets its this to the provided value, arguments can be passed as an Array object.

Function.prototype.bind()
    Creates a new function which, when called, has its this set to the provided value, with a given sequence of arguments preceding any provided when the new function was called.

Function.prototype.call()
    Calls (executes) a function and sets its this to the provided value, arguments can be passed as they are.

Function.prototype.toString()
    Returns a string representing the source code of the function. Overrides the Object.prototype.toString method.


Unstandardized Methods

* Function.prototype.isGenerator() STANDARDIZING (not in node 8)
    Returns true if the function is a generator; otherwise returns false.

* Function.prototype.toSource() STANDARDIZING (not in node 8)
    Returns a string representing the source code of the function. Overrides the Object.prototype.toSource method.

*/


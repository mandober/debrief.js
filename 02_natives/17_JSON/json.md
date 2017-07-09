# JSON

[JSON](http://json.org/) object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its 2 method properties it has no interesting functionality of its own.

[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) is a syntax for serializing:
- objects
- arrays
- numbers
- strings
- booleans and
- null

It is based upon JavaScript syntax but is distinct from it: some JavaScript is not JSON, and some JSON is not JavaScript.


## JavaScript and JSON differences:

* **Objects and Arrays**   
  Property names must be *double-quoted strings*; trailing commas are forbidden.
* **Numbers**   
  Leading zeros are prohibited (in `JSON.stringify` zeros will be ignored, but in `JSON.parse` it will throw SyntaxError); a decimal point must be followed by at least one digit.
* **Strings**   
Only a limited set of characters may be escaped; certain control characters are prohibited; the Unicode line separator (U+2028) and paragraph separator (U+2029) characters are permitted; strings must be *double-quoted*. 


## Methods

`JSON.parse()`   
    Parse a string as JSON, optionally transform the produced value and its properties, and return the value.   
`JSON.stringify()`   
    Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.


### JSON.stringify

The `JSON.stringify()` method converts a JavaScript value to a JSON string, optionally replacing values if a *replacer function* is specified, or optionally including only the specified properties if a *replacer array* is specified.

**Syntax**   
`JSON.stringify(value[, replacer[, space]])`

**Parameters:**   

**value**   
    The value to convert to a JSON string.   

**replacer** (optional)   
* A function that alters the behavior of the stringification process, or 
* an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string.   

**space** (Optional)   
A String or Number object that's used to insert white space into the output JSON string for readability purposes. 
* If this is a **Number**, it indicates the number of space characters to use as white space; this number is capped at 10 (if it is greater, the value is just 10). Values less than 1 indicate that no space should be used.
* If this is a **String**, the string (or the first 10 characters of the string, if it's longer than that) is used as white space.
* If this parameter is not provided (or is null), no white space is used.    

**Return value**   
A JSON string representing the given value.    

**Description**   
JSON.stringify() converts a value to JSON notation representing it:    
* Properties of non-array objects are not guaranteed to be stringified in any particular order. Do not rely on ordering of properties within the same object within the stringification.
* Boolean, Number, and String objects are converted to the corresponding primitive values during stringification, in accord with the traditional conversion semantics.
* If undefined, a function, or a symbol is encountered during conversion it is 
    * either omitted (when it is found in an object) or 
    *  censored to null (when it is found in an array).   
  JSON.stringify can also just return undefined when passing in "pure" values like JSON.stringify(function(){}) or JSON.stringify(undefined).
* __All symbol-keyed properties will be completely ignored, even when using the replacer function.__
* __Non-enumerable properties will be ignored__


`toJSON()`
If JSON.stringify() encounters an object that has a toJSON method, it uses that method to obtain a value to be stringified.
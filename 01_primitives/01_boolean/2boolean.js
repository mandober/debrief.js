// COERCION TO BOOLEAN

Boolean(undefined); // false
Boolean(null); // false
Boolean(false); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(+0); // false
Boolean(NaN); // false
Boolean(""); // false
Boolean(); // false
Boolean(document.all); // false

// Symbols can be coerced to boolean and string only

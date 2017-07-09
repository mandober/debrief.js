// Reflect
// Reflect is a static object you can’t new up nor call, and all of its methods are static.
// The traps in ES6 proxies are mapped one-to-one to the Reflect API. For every trap, there’s a matching reflection method in Reflect.

// TReflect.defineProperty method returns a boolean value indicating whether the property was successfully defined.Meanwhile, its Object.defineProperty counterpart returns the object it got as its first argument – not very useful.

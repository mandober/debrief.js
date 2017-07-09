# Proxy

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

The Proxy object is used to define custom behavior for fundamental operations 
(e.g. property lookup, assignment, enumeration, function invocation, etc).

## Terms

- **handler**   placeholder object which contains traps
- **traps**     methods that provide property access
- **target**    object which the proxy virtualizes
- **receiver**  is the proxy object itself or an object that inherits from the proxy


## Syntax

`var p = new Proxy(target, handler)`

*Parameters*:
- target:
  target object (any object, including a native array, a function or even another proxy) to wrap with Proxy.
- handler:
  object whose properties are functions which define the behavior of proxy when an operation is performed on it.

*METHODS*:
`Proxy.revocable()`   Creates a revocable Proxy object.


*Methods of the HANDLER object*:
The handler object is a placeholder object which contains traps for Proxy.
All traps are optional. If a trap has not been defined, the default behavior
is to forward the operation to the target.

`handler.METHOD()` where METHOD is one of these traps:

has()                        *in* operator trap
get()                        trap for *getting property* values
set()                        trap for *setting property* values
ownKeys()                    trap for *Object.getOwnPropertyNames* and *Object.getOwnPropertySymbols*
getPrototypeOf()             trap for *Object.getPrototypeOf*
setPrototypeOf()             trap for *Object.setPrototypeOf*
isExtensible()               trap for *Object.isExtensible*
preventExtensions()          trap for *Object.preventExtensions*
getOwnPropertyDescriptor()   trap for *Object.getOwnPropertyDescriptor*
defineProperty()             trap for *Object.defineProperty*
deleteProperty()             *delete* operator trap
apply()                      *function call* trap
construct()                  *new* operator trap

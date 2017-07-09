# Strict mode


- Strict mode can be file-wide or bound to a function:
  * In files, the statement 'strict mode' must come first, before any code.
    Beware when concatenating strict and sloppy files.
  * In functions, it must be the first thing in the function's body.
  * Function with default parameters cannot be in strict mode - will throw.
- In strict mode it isn't possible to accidentally create global variables
- makes assignments which would otherwise silently fail throw an exception.
- makes attempts to delete undeletable properties throw (where before the attempt would simply have no effect)
- requires that function parameter names be unique
- forbids octal syntax
- forbids setting properties on primitive values
- prohibits `with`
- `this` defaults to undefined (instead of window) inside functions
- eval of strict mode code does not introduce new variables into the surrounding scope
- arguments.callee is no longer supported. In normal code arguments.callee refers to the enclosing function




```js
a = 10; // creates global var
function fn() {
    b = 5; // creates global var
}

```





**Links**

- [MDN - Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [MDN - Transitioning to strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)
- [Where's Walden? New ES5 strict mode support: now with poison pills!](http://whereswalden.com/2010/09/08/new-es5-strict-mode-support-now-with-poison-pills/)
- [Where's Walden? New ES5 strict mode requirement: function statements not at top level of a program or function are prohibited](http://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/)
- [Where's Walden? New ES5 strict mode support: new vars created by strict mode eval code are local to that code only](http://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/)
- [JavaScript "use strict" tutorial for beginners.](http://qnimate.com/javascript-strict-mode-in-nutshell/)
- [John Resig - ECMAScript 5 Strict Mode, JSON, and More](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
- [ECMA-262-5 in detail. Chapter 2. Strict Mode.](http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/)
- [Strict mode compatibility table](http://kangax.github.io/compat-table/es5/#Strict_mode)


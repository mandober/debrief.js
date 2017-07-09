// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

try {
    null.bar;
} catch (e) {
    if (e instanceof EvalError) {
        console.log(e.name + ': ' + e.message);
    } else if (e instanceof RangeError) {
        console.log(e.name + ': ' + e.message);
    }
    // ... etc
}
// undefined

// The Undefined Type

// The Undefined type has exactly one value, called `undefined`.
// Any variable that has not been assigned a value has the value undefined.


// In JavaScript, the absence of a value is written undefined, and it means there is no value.It will crop up
// again.undefined is its own type of value, and it acts like a value type:

undefined; //=> undefined

// Like numbers, booleans and strings, JavaScript can print out the value undefined.

undefined === undefined;  //=> true
(() => { })() === (() => { })() //=> true
(() => { })() === undefined //=> true

/*
No matter how you evaluate undefined, you get an identical value back.undefined is a value that means “I don’t have a value.” But it’s still a value : -)

You might think that undefined in JavaScript is equivalent to NULL in SQL.No.In SQL, two things that are NULL are not equal to nor share the same identity, because two unknowns can’t be equal.In JavaScript, every undefined is identical to every other undefined.



void

We’ve seen that JavaScript represents an undefined value by typing undefined, and we’ve generated undefined values in two ways:

By evaluating a function that doesn’t return a value (() => { })(), and;
By writing undefined ourselves.

There’s a third way, with JavaScript’s void operator.Behold:
*/

void 0 //=> undefined
void 1 //=> undefined
void (2 + 2) //=> undefined

/*
void is an operator that takes any value and evaluates to undefined, always.So, when we deliberately want an undefined value, should we use the first, second, or third form? 4 The answer is, use void. By convention, use void 0.

The first form works but it’s cumbersome.The second form works most of the time, but it is possible to break it by reassigning undefined to a different value, something we’ll discuss in Reassignment and Mutation.The third form is guaranteed to always work, so that’s what we will use.
*/

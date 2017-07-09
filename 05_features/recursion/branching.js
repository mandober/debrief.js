/* RECURSION: branching

http://eloquentjavascript.net/03_functions.html

Consider this puzzle: by starting from the number 1 and repeatedly
either adding 5 or multiplying by 3, an infinite amount of new numbers
can be produced. How would you write a function that, given a number,
tries to find a sequence of such additions and multiplications that
produce that number? For example, the number 13 could be reached by
first multiplying by 3 and then adding 5 twice, whereas the number
15 cannot be reached at all.
*/

function branching(target) {

    function find(start, history) {
        // base case
        if (start === target) return history;
        if (start > target) return null;
        // recursive case
        return find( start + 5, `(${history} + 5)` )
            || find( start * 3, `(${history} * 3)` );
    }

    return find(1, "1");
}

console.log(branching(24)); // (((1 * 3) + 5) * 3)

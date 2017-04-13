// regex
// http://speakingjs.com/es5/ch19.html

// empty regexp is /(?:)/ becasue just // is a comment
new RegExp(''); // /(?:)/

// matches always:
var always = /(?:)/;

// matches never:
var never = /.^/;





// SEARCH
"HAYSTACK".match(/NEEDLE/);
// Returns the first index at which regexp matches in the receiver (or –1 if it doesn’t)
'-yy-xxx-y-'.search(/x+/); // 4


// MATCH
"HAYSTACK".match(/NEEDLE/g);
// Matches the given regular expression against the receiver.
// It returns a match object for the first match (if the flag /g of regexp is not set):
'-abb--aaab-'.match(/(a+)b/); // ['ab', 'a']
// ['ab', 'a', index: 1, input: '-abb--aaab-']

// If the flag /g is set, then all complete matches (group 0) are returned in an array:
'-abb--aaab-'.match(/(a+)b/g); // ['ab', 'aaab']


// REPLACE
"HAYSTACK".replace(/NEEDLE/g, "LOCOMOTIVE");

// Searches for `search` and replaces it with `replacement`.
// `search` can be a string or a regular expression, and `replacement` can be a string or a function. 
// Unless you use a regular expression as search whose flag /g is set, only the first occurrence will be replaced:
'iixxxixx'.replace('i', 'o'); // 'oixxxixx'
'iixxxixx'.replace(/i/, 'o'); // 'oixxxixx'
'iixxxixx'.replace(/i/g, 'o'); // 'ooxxxoxx'
'shiiiiiiit'.replace(/i+/g, 'i'); // 'shit'

// A dollar sign ($) in a replacement string allows you to refer to the complete match or a captured group:
'iixxxixx'.replace(/i+/g, '($&)');   // '(ii)xxx(i)xx'  (complete match)
'iixxxixx'.replace(/(i+)/g, '($1)'); // '(ii)xxx(i)xx'  (group 1)
'mooooorooooon'.replace(/o+/g, 'o');   // 'moron'

// You can also compute a replacement via a function:
function repl(all) {
    return '(' + all.toUpperCase() + ')';
}
'axbbyyxaa'.replace(/a+|b+/g, repl); // '(A)x(BB)yyx(AA)'
// or just:
'aaxbbyyxaa'.replace(/a+|b+/g, all => all.toUpperCase()); // "AAxBByyxAA"

/*
If replacement is a string, its content is used verbatim to replace the match.
The only exception is the special character dollar sign ($), which starts so- called replacement directives:

Groups: $n inserts group n from the match.
n must be at least 1 ($0 has no special meaning).

The matching substring:
 $` (backtick) inserts the text before the match.
 $& inserts the complete match.
 $' (apostrophe) inserts the text after the match.
 $$ inserts a single $.
*/

//This example refers to the matching substring and its prefix and suffix:
'axb cxd'.replace(/x/g, "[$`,$&,$']") // 'a[a,x,b cxd]b c[axb c,x,d]d'

// This example refers to a group:
'"foo" and "bar"'.replace(/"(.*?)"/g, '#$1#') // '#foo# and #bar#'

/*
If replacement is a function, it computes the string that is to replace the match.
This function has the following signature:

function (completeMatch, group_1, ..., group_n, offset, inputStr)

`completeMatch` is the same as $& previously
`offset` indicates where the match was found
`inputStr` is what is being matched against

Thus, you can use the special variable arguments to access
groups (group 1 via arguments[1], and so on).For example:
*/
function replaceFunc(match) { return 2 * match }
'3 apples and 5 oranges'.replace(/[0-9]+/g, replaceFunc) // '6 apples and 10 oranges'


function escapeText(text) {
    return text.replace(/[\\^$.*+?()[\]{}|=!<>:-]/g, '\\$&');
}
console.log(escapeText('*All* (most?) aspects.')); // \*All\* \(most\?\) aspects\.



function countOccurrences(regex, str) {
    if (!regex.global) {
        throw new Error('Please set flag /g of regex');
        regex.global = true;
    }
    var origLastIndex = regex.lastIndex;  // store
    regex.lastIndex = 0;

    var count = 0;
    while (regex.test(str)) count++;

    regex.lastIndex = origLastIndex;  // restore
    return count;
}

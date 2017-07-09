# Special chars in regular expressions

The following table provides a complete list and description of the special chars that can be used in regular expressions.

TOC:

- Charsets
- Alternation
- Quantifiers
- Bounderies
- Groups
- Escaping
- Control chars



`SC` = special char    
`NSC` = non-special char   
    
    

### Charsets


# `abcd...XYZ...789`
- Most characters match itself.


# `.`
- matches **any single char except the newline char**.
- To match literal dot escape it: `\.`
- For example, `/.n/` matches 'an' and 'on' in "nay, an apple is on the tree", but not 'nay'.


# `[xyz]`
- **Character set**
- This pattern type matches any one of the chars in the brackets, including escape sequences.
- **SC like the dot(.) and asterisk (*) are not special inside a char set, so they don't need to be escaped.** 
- You can specify a range of chars by using a **hyphen**. 
- The pattern `[a-d]`, which performs the same match as `[abcd]`, matches the 'b' in "brisket" and the 'c' in "city".
- The patterns `/[a-z.]+/` and `/[\w.]+/` match the entire string "test.i.ng".
- Pattern `[^]` is often used to **match everything including the newline char**.

# `[^xyz]`
- A complemented or **negated character set**.
- That is, it matches anything that is not enclosed in the brackets.
- You can specify a range of chars by using a hyphen.
- Everything that works in the normal char set also works here.
- For example, `[^abc]` is the same as `[^a-c]`. They initially match 'r' in "brisket" and 'h' in "chop."


# `\d`
- Matches a **digit** char.
- Equivalent to [0-9].
- For example, `/\d/` or `/[0-9]/` matches '2' in "B2 is the suite number."

# `\D`
- Matches a **non-digit** char.
- Equivalent to [^0-9].
- For example, `/\D/` or `/[^0-9]/` matches 'B' in "B2 is the suite number."


# `\s`
- Matches a **single whitespace char**, including **space, tab, form feed, line feed**.
- Equivalent to `[\f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`
- For example, `/\s\w*/` matches ' bar' in "foo bar."

# `\S`
- Matches a **single char other than white space**.
- Equivalent to `[^\f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`
- For example, `/\S*/` matches 'foo' in "foo bar."


# `\w`
- Matches any **alphanumeric char including the underscore**.
- Equivalent to `[A-Za-z0-9_]`
- For example, `/\w/` matches 'a' in "apple," '5' in "$5.28," and '3' in "3D."

# `\W`
- Matches **any non-word char**.
- Equivalent to `[^A-Za-z0-9_]`
- For example, `/\W/` or `[^A-Za-z0-9_]` matches '%' in "50%."



### ALTERNATION:

# `x|y`
- Matches either `'x'` or `'y'`.
- For example, `/green|red/` matches 'green' in "green apple" and 'red' in "red apple."




### QUANTIFIERS:


# `*`
- Matches the preceding expression **0 or more** times.
- Equivalent to `{0,}`. 
- For example, `/bo*/` matches 'boooo' in "A ghost booooed" and 'b' in "A bird warbled" but nothing in "A goat grunted".


# `+`
- Matches the preceding expression **1 or more** times.
- Equivalent to {1,}.
- For example, /a+/ matches the 'a' in "candy" and all the a's in "caaaaaaandy", but nothing in "cndy".


# `?`
- Matches the preceding expression **0 or 1 time**.
- Equivalent to {0, 1 }.
  For example, `/e?le?/` matches the 'el' in "angel" and the 'le' in "angle" and also the 'l' in "oslo".
- If used immediately after any of the quantifiers `*`, `+`, `?`, or `{}`, makes the quantifier    
**non-greedy** (matching the fewest possible chars), as opposed to the default, which is    
greedy (matching as many chars as possible).
For example, applying `/\d+/` to "123abc" matches "123". But applying `/\d+?/` to that same string matches only the "1".
- Also used in lookahead assertions, as described in the `x(?=y)` and `x(?!y)` entries of this table.


# `{n}`
- Matches **exactly `n`** occurrences of the preceding expression, with `n` being unsigned integer.
- For example, `/a{2}/` doesn't match the 'a' in "candy," but it does match all of the a's in "caandy," and the first two a's in "caaandy."


# `{n,}`
- Matches **at least `n`** occurrences of the preceding expression (`n` = uint)
- For example, `/a{2,}/` will match "aa", "aaaa" and "aaaaa" but not "a"


# `{n,m}`
- Matches **at least `n` and at most `m`** occurrences of the preceding expression (`n,m` = uint AND `n <= m`)
- For example, `/a{1,3}/` matches nothing in "cndy", the 'a' in "candy," the first two a's in "caandy," and the first three a's in "caaaaaaandy". Notice that when matching "caaaaaaandy", the match is "aaa", even though the original string had more a's in it.


### BOUNDERIES:

# `^`
- Matches **beginning of input**.
- If the **m** (multiline) flag is set to true, also matches immediately after a line break char.
- For example, `/^A/` does not match the 'A' in "an A", but does match the 'A' in "An E".
- The `^` has a different meaning when it appears as the **first char** in a *char set pattern*, then it negates the char set; e.g. `/[^abc]/` means chars NOT belonging to [abc] charset.

# `$`
- Matches end of input.
- If the *m flag* is set to true, also matches immediately before a line break char. 
- For example, `/t$/` does not match the 't' in "eater", but does match it in "eat".


# `\b`
- Matches a **word boundary**.
- A word boundary matches the position where a word char is not followed or preceded by another word-char. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero. 
- Not to be confused with [\b].
- Examples:
  * `/\bm/` matches the 'm' in "moon";
  * `/oo\b/` does not match the 'oo' in "moon", because 'oo' is followed by 'n' which is a word char;
  * `/oon\b/` matches the 'oon' in "moon", because 'oon' is the end of the string, thus not followed by a word char;
  * `/\w\b\w/` will never match anything, because a word char can never be followed by both a non-word and a word char.
- Note:   
  * JS regexp engine defines a specific set of chars to be **word chars**. 
  * Any char not in that set is considered a **word break**. 
  * This set of chars is fairly limited: it consists solely of:
    - Roman alphabet in both upper-and lower-case    
    - decimal digits    
    - underscore char    
      Accented chars, such as "é" or "ü" are **word breaks**


# `\B`
- Matches a **non-word boundary**.
- This matches a position where the previous and next char are of the same type: Either both must be words, or both must be non-words. The beginning and end of a string are considered non- words.
- For example, `/\B../` matches 'oo' in "noonday", and `/y\B./` matches 'ye' in "possibly yesterday."




### GROUPS:


# `(x)`
- Matches `'x'` and **remembers** the match
- The parentheses are called **capturing parentheses**.
- The '(foo)' and '(bar)' in the pattern `/(foo)(bar) \1\2/` match and remember the first two words in the string "foo bar foo bar". 
- The `\1` and `\2` in the pattern match the string's last two words. They are called **backreferences**.
- Note that `\1`, `\2`, `\n` are used in the matching part of the regex. 
- In the replacement part of a regex the syntax `$1`, `$2`, `$n` must be used, e.g.: `'bar foo'.replace(/(...)(...)/, '$2 $1')`.
- `$&` means the whole matched string.

# `\n`
- Where `n` is a positive integer, a **back reference** to the last substring matching the `n` parenthetical in the regular expression (counting left parentheses).
- For example, `/apple(,)\sorange\1/` matches 'apple, orange,' in "apple, orange, cherry, peach."
- For example, `/(three) (one) (two) \2 \3 \1/` and get: "one two three"

# `(?:x)`
- Matches `'x'` but does **not remember** the match.
- The parentheses are called **non-capturing parentheses**, and let you define subexpressions for regular expression operators to work with. 
- Consider the sample expression `/(?:foo){1,2}/`. If the expression was `/foo{1,2}/`, the `{1,2}` chars would apply only to the last 'o' in 'foo'. With the non-capturing parentheses, the {1,2} applies to the entire word 'foo'.


# `x(?=y)`
- Matches `'x'` only if `'x'` **is followed by `'y'`**.
- This is called a **lookahead**. 
- For example, `/Jack(?=Sprat)/` matches 'Jack' only if it is followed by 'Sprat'. `/Jack(?=Sprat|Frost)/` matches 'Jack' only if it is followed by 'Sprat' or 'Frost'. However, neither 'Sprat' nor 'Frost' is part of the match results.


# `x(?!y)`
- Matches `'x'` only if `'x'` is **not followed by `'y'`**.
- This is called a **negated lookahead**. 
- For example, `/\d+(?!\.)/` matches a number only if it is not followed by a decimal point. The regular expression `/\d+(?!\.)/.exec("3.141")` matches '141' but not '3.141'.




### ESCAPING:


# `\`
- A backslash that **precedes NSC** indicates that the next char is special and is not to be interpreted literally. 
- For example, `b` without a preceding `\` generally matches lowercase `b`'s wherever they occur. But a `\b` by itself doesn't match any char; it forms the special *word boundary* char.   
- A backslash that **precedes SC** indicates that the next char is not special and should be interpreted literally. 
- For example, the pattern `/a*/` relies on the SC `*` to match 0 or more `a`'s. By contrast, the pattern `/a\*/` removes the specialness of the `*` to enable matches with strings like `a*`
- Do not forget to **escape `\` itself** when using RegExp ("pattern") notation because `\` is also an 
  *escape char in strings*.


# `\xhh`
- Matches the char with the code *hh* (two hexadecimal digits)

# `\uhhhh`
- Matches the char with the code *hhhh* (four hexadecimal digits).

# `\u{hhhh}`
- only if **u flag** is set: Matches the char with the Unicode value *hhhh*(hexadecimal digits).




### CONTROL CHARS:


# `\cX`
- Where `X` is a char ranging A-Z.
- Matches a **control char** in a string.
- For example, `/\cM/` matches `Ctrl+M (U + 000D)` in a string.

# `[\b]`
- Matches a backspace (U+0008).
- You need to use square brackets if you want to match a literal backspace char.
- Not to be confused with `\b`

# `\f`
- Matches a form feed (U+000C).

# `\n`
- Matches a line feed (U+000A).

# `\r`
- Matches a carriage return (U+000D).

# `\t`
- Matches a tab (U+0009).

# `\v`
- Matches a vertical tab (U+000B).

# `\0`
- Matches a NULL (U+0000) char.
- Do not follow this with another digit, because `\0<digits>` is an **octal** escape sequence.


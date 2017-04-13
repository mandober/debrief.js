'use strict';

// arrays

/*
union
intersection
difference
complement 1
complement 2

DESCRIPTION:
Calculates union, intersection, difference and complement array.
  * If input is 2 arrays, everything works as expected.
  * In case of 3 or more arrays:
   - UNION works as expected:         A ∪ B  ∪ C  ∪ D
   - INTERSECTION does not, it is: ((A ∩ B) ∩ C) ∩ D
   - DIFFERENCE, the same as above: ((A Δ B) Δ C) Δ D
   - COMPLEMENT, the same as above: ((A \ B) \ C) \ D

Venn functions:
#                 setA {abcde}
#                 setB {abfg}
#        union: A ∪ B  {abcdefg}
# intersection: A ∩ B  {ab}
#   difference: A Δ B  {cdefg}
#   complement: A \ B  {cde}
#               B \ A  {fg}

*/

let a = ["a", "b", "c", "d", "e"];
let b = ["a", "b", "f", "g"];

// UNION: A ∪ B = ["a", "b", "c", "d", "e", "f", "g"]
let expected = ["a", "b", "c", "d", "e", "f", "g"];



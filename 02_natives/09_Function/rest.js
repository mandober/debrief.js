// FUNCTIONS: rest
// rest param must be the last one
// cannot take default values
// it is not counted in function.length

function sayThings(tone, ...quotes) {
    console.log(Array.isArray(quotes));
    console.log(`In ${tone}'s voice, I say ${quotes}`);
}

sayThings("Morgan Freeman", "Something serious", "Imploding Universe", "Amen");
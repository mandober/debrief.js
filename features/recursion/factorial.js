
function factorial(x) {
    if (x < 1) throw new Error("Input must be a positive integer");
    if (!Number.isInteger(x)) throw new Error("Input must be an integer");
    if (x > 21) throw new Error("Choose lower integer. Result for this one will be imprecise.");
    if (x > 11) throw new Error("Choose any integer you like...as long as it's between 1 and 10.");
    if (x === 1) return 1;
    return x * factorial(--x);
}

var capitals = [
    ["berlin", "parIs", "MaDRiD"],
    ["monTEvideo", "BrASiLia"],
    ["dElhi", "toKYo", "BeiJing"],
    ["CanBerra"],
    ["kiGaLi", "pretoRIA"]
];

// Capitalize function
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// x=0, array.length=5
function fixLetterCase(array, x, y) {
    // if array is done
    if (x === array.length) {
        return;
    }
    // if inner array is done take next element of array, reset index of inner array to 0
    else if (y === array[x].length) {
        return fixLetterCase(array, ++x, 0);
    }
    // recurse through elements of inner array
    else {
        array[x][y] = capitalize(array[x][y]);
        return fixLetterCase(array, x, ++y);
    }
}

fixLetterCase(capitals, 0, 0);
console.log(capitals);
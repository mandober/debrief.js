let hasDigits = function (number=0, digit=0) {
    return ''.indexOf.call(number, digit) >= 0;
}

let arrayRotate = function (arr, step=1) {
    let len = arr.length;
    for (let i = 0; i < len; ++i) {
        arr.push(arr.shift());
    }
    return arr;
}

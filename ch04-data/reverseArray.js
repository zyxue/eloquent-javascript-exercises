function reverseArray(array) {
    result = [];
    for (var i =  array.length - 1; i >=0; i--) {
        result.push(array[i]);
    }
    return result;
}


function reverseArrayInPlace(array) {
    var tmp;
    var max = Math.round(array.length) / 2;
    var n = 0;
    while (n < max) {
        tmp = array[n];
        m = array.length - (n + 1); // index to the end
        array[n] = array[m];
        array[m] = tmp;
        n ++;
    }
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

function range(begin, end, step) {
    if (step == undefined) {
        step = 1
    }

    var result = [];
    for (var i = begin; i <= end; i += step) {
        result.push(i);
    }
    return result
}


function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i ++) {
        console.log(array[i]);
        total += array[i];
    }

    return total
}

console.log(range(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sum(range(1, 10)) === 55);

console.log(range(1, 10, 5))
console.log(range(1, 10, 5) == [1, 6]);

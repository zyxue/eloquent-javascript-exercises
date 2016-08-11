function range(begin, end, step) {
    if (step == undefined) {
        if (begin < end) {
            step = 1
        } else {
            step = -1
        }
    }
    
    var result = [];
    if (begin < end && step > 0) {
        for (var i = begin; i <= end; i += step) {
            result.push(i);
        }
    } else if (begin > end && step < 0) {
        for (var i = begin; i >= end; i += step) {
            result.push(i);
        }
    } else if (begin === end) {
        // do nothing;
    } else {
        var msg ="Not sure how to build an array with the input" +
            "(" +
            arguments['0'] + ', ' +
            arguments['1'] + ', ' +
            arguments['2'] +
            ")" ;
        throw msg;
    }

    return result
}


function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i ++) {
        total += array[i];
    }

    return total
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
// will raise an error
// console.log(sum(range(1, 10, -1)));

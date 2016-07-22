function arrayToList(array) {
    if (array.length === 1) {
        return {value: array[0], rest: null};
    }

    return {
        value: array[0],
        rest: arrayToList(array.slice(1))
    }
}
 

function listToArray(list) {
    if (list.rest === null) {
        return [list.value]
    }

    return [list.value].concat(listToArray(list.rest));
}


function prepend(elem, list) {
    return {
        value: elem,
        rest: list
    }
}


function nth(list, index) {
    var n = 0;
    var result, rest;
    while (n <= index) {
        result = list.value;
        list = list.rest;
        n++;
    }
    return result
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 2


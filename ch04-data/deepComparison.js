function isObject(obj) {
    return typeof obj === "object" && obj !== null;
}


function deepEqual(a, b) {
    if (isObject(a) && isObject(b)) {
        for (var key in a) {
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true
    } else {
        return a === b;
    }
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

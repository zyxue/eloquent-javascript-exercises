function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var ancestry = JSON.parse(require('./ancestry.js'));

function groupBy(array, genGroupKey) {
    result = {};
    array.forEach(function(element) {
        var key = genGroupKey(element);
        if (key in result) {
            result[key].push(element);
        } else {
            result[key] = [element];
        }
    });
    return result
}

var byCentury = groupBy(ancestry, function(person) {
    return Math.ceil(person.died / 100);
})

for (century in byCentury) {
    var exp = byCentury[century].map(function(person) {
        return person.died - person.born;
    });

    var ave = average(exp);
    console.log(century, ave);
}

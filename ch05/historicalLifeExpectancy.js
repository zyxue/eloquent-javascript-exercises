function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var ancestry = JSON.parse(require('./ancestry.js'));

var byCentury = {};
ancestry.forEach(function(person) {
    var century = Math.ceil(person.died / 100);
    if (century in byCentury) {
        byCentury[century].push(person);
    } else {
        byCentury[century] = [person];
    }
});

for (century in byCentury) {
    var exp = byCentury[century].map(function(person) {
        return person.died - person.born;
    });

    var ave = average(exp);
    console.log(century, ave);
}

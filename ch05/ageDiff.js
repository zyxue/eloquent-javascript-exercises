function average(array) {
    function plus(a, b) {
        return a + b;
    }

    return array.reduce(plus) / array.length;
}

var ancestry = JSON.parse(require('./ancestry.js'));

var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

var ageDiff = ancestry.map(function(person) {
    var mother = byName[person.mother];
    if (mother != undefined) {
        return person.born - mother.born;
    }
})

ageDiff = ageDiff.filter(function(obj) {
    return obj != undefined;
})

console.log(average(ageDiff));

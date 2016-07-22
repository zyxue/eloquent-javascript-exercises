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


function hasKnownMother(person) {
    return byName[person.mother] != undefined;
}

var ageDiff = ancestry.filter(hasKnownMother).map(function(person) {
    return person.born - byName[person.mother].born;
})

console.log(average(ageDiff));

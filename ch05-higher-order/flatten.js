var array = [[1, 2, 3], [4, 5], [6]];
console.log(
    array.reduce(function(a, b) {
        return a.concat(b);
    }, [])
);

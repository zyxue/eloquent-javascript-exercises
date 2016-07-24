function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
    // made it small to see how many times it failed before success
    if (Math.random() < 0.1) 
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    var counter = 0;
    for (;;) {
        try {
            var res = primitiveMultiply(a, b);
            console.log('failed ' + counter + ' times before success');
            return res;
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                counter ++;
            } else {
                throw e;
            }
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64

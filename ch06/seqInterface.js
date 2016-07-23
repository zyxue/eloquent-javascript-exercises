function logFive(seq) {
    var c = 0;
    var currentVal;
    while (c < 5) {
        currentVal = seq.next();
        if (currentVal == null) {
            break
        } else {
            console.log(currentVal);    
            c ++;
        }
    }
}


function ArraySeq(array) {
    var counter = 0;

    this.next = function() {
        if (counter == array.length) {
            return null;
        } else {
            return array[counter++];
        }
    };
}


function RangeSeq(from, to) {
    var result = [];
    for (var i = from; i < to; i ++) {
        result.push(i);
    }

    var counter = 0;
    this.next = function() {
        if (counter == result.length) {
            return null;
        } else {
            return result[counter++];
        }
    };
}

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));

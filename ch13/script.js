var MOUNTAINS = require('./mountains.js');

function buildTable(array) {
    var table = document.createElement('table');
    // document.body.append(table);

    var keys = Object.keys(array[0]);
    array.forEach(function(object, index, array) {
        var tr = document.createElement('tr');
        keys.forEach(function(key, idx, arr) {
            var td = document.createElement('td');
            var val = object[key];
            td.appendChild(document.createTextNode(val));
            if (typeof val === "number")
                td.style.textAlign = 'right';
            tr.appendChild(td);
        });

        table.appendChild(tr);
    });

    console.log(array.forEach);
    console.log(array);
    console.log(table);
    return table;
}


var table = buildTable(MOUNTAINS);

document.body.appendChild(table);


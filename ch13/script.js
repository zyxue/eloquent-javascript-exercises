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


// var table = buildTable(MOUNTAINS);
// document.body.appendChild(table);

function byTagName(node, tagName) {
    if (node.nodeType !== document.ELEMENT_NODE)
        return [];

    var result = [];

    for (var i = 0; i < node.children.length; i++) {
        var val = node.children[i];
        if (val.tagName.toLowerCase() === tagName.toLowerCase()) {
            result.push(val);
        } else {
            if (val.nodeType == document.ELEMENT_NODE)
                result = result.concat(byTagName(val, tagName));
        }
    }
    return result;
}


console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
var para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2

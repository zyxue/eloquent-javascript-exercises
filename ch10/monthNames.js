(function(exports) {
    var names = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
  ];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(this.month = {});

console.log(this);
console.log(this.month);

console.log(this.month.name(2));
// → March
console.log(this.month.number("November"));
// → 10

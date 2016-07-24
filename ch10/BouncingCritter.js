var utils = require('./utils');
var settings = require('./settings');


function BouncingCritter() {
    this.direction = utils.randomElement(settings.directionNames);
};

BouncingCritter.prototype.act = function(view) {
    if (view.look(this.direction) != " ")
        this.direction = view.find(" ") || "s";
    return {type: "move", direction: this.direction};
};

module.exports = BouncingCritter;

var Vector = require('./Vector');
var Grid = require('./Grid');
var BouncingCritter = require('./BouncingCritter');
var World = require('./World');
var actionTypes = require('./actionTypes');

var utils = require('./utils');
var settings = require('./settings');



function dirPlus(dir, n) {
    var index = settings.directionNames.indexOf(dir);
    return settings.directionNames[(index + n + 8) % 8];
}

function WallFollower() {
    this.dir = "s";
}

WallFollower.prototype.act = function(view) {
    var start = this.dir;
    if (view.look(dirPlus(this.dir, -3)) != " ")
        start = this.dir = dirPlus(this.dir, -2);
    while (view.look(this.dir) != " ") {
        this.dir = dirPlus(this.dir, 1);
        if (this.dir == start) break;
    }
    return {type: "move", direction: this.dir};
};


function LifelikeWorld(map, legend) {
    World.call(this, map, legend);
}

LifelikeWorld.prototype = Object.create(World.prototype);

LifelikeWorld.prototype.letAct = function(critter, vector) {
    var action = critter.act(new View(this, vector));
    var handled = action &&
            action.type in actionTypes &&
            actionTypes[action.type].call(this, critter,
                                          vector, action);
    if (!handled) {
        critter.energy -= 0.2;
        if (critter.energy <= 0)
            this.grid.set(vector, null);
    }
};

function Plant() {
    this.energy = 3 + Math.random() * 4;
}

Plant.prototype.act = function(view) {
    if (this.energy > 15) {
        var space = view.find(" ");
        if (space)
            return {type: "reproduce", direction: space};
    }
    if (this.energy < 20)
        return {type: "grow"};
};

function PlantEater() {
  this.energy = 20;
}

PlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 60 && space)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  if (plant)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
};


function Wall() {};


var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

var world = new World(
    plan, {
        "#": Wall,
        "o": BouncingCritter
    });
console.log(world.toString());

for (var i = 0; i < 5; i++) {
    world.turn();
    console.log(world.toString());
}

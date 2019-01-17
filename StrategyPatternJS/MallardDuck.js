let Duck = require("./Duck");
let FlyWithWings = require("./FlyWithWings");
let Quack = require("./Quack");

module.exports = class MallardDuck extends Duck {
    constructor(){
        super();
        this.fliesBy = new FlyWithWings();
        this.quacksBy = new Quack();
    }

    display() {
        console.log("I'm a Mallard Duck");
    }
};
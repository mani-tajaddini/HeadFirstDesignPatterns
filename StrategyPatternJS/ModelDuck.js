let Duck = require("./Duck");
let FlyNoWay = require("./FlyNoWay");
let Quack = require("./Quack");

module.exports = class ModelDuck extends Duck {
  constructor(){
      super();
      this.fliesBy = new FlyNoWay();
      this.quacksBy = new Quack();
  }

  display(){
      console.log("I'm a model duck");
  }
};
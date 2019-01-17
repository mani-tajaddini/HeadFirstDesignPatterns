let MallardDuck = require("./MallardDuck");
let ModelDuck = require("./ModelDuck");
let FlyRocketPowered = require("./FlyRocketPowered");

let mallard = new MallardDuck();
mallard.performQuack();
mallard.performFly();

let model = new ModelDuck();
model.performFly();
model.fliesBy = new FlyRocketPowered();
model.performFly();
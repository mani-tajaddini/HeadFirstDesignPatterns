"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MallardDuck_1 = require("./MallardDuck");
var ModelDuck_1 = require("./ModelDuck");
var FlyRocketPowered_1 = require("./FlyRocketPowered");
var mallard = new MallardDuck_1.default();
mallard.performQuack();
mallard.performFly();
var model = new ModelDuck_1.default();
model.performFly();
model.fliesBy = new FlyRocketPowered_1.default();
model.performFly();

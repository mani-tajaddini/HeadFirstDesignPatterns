let Interface = require("./InterfaceES6");

let IQuackBehavior = new Interface("IQuackBehavior", ["quack"]);
let IFlyBehavior = new Interface("IFlyBehavior", ["fly"]);

"use strict";

let priv = new WeakMap();
let _ = (instance) => {return priv.get(instance)};


module.exports = class Duck {
    constructor(){
        let privateMembers = {
            flyBehavior: "",
            quackBehavior: ""
        };
        priv.set(this, privateMembers);
    }

    set fliesBy(fb) {
        IFlyBehavior.isImplementedBy(fb);
        _(this).flyBehavior = fb
    }

    set quacksBy(qb) {
        IQuackBehavior.isImplementedBy(qb);
        _(this).quackBehavior = qb
    }

    performFly(){
        _(this).flyBehavior.fly();
    }

    performQuack(){
        _(this).quackBehavior.quack();
    }

    swim(){
        console.log("Swimming...");
    }

    display(){
        throw new Error("Implement this function")
    }
};
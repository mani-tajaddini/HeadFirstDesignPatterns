"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Object.defineProperty(Duck.prototype, "fliesBy", {
        set: function (fb) {
            this.flyBehavior = fb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duck.prototype, "quacksBy", {
        set: function (qb) {
            this.quackBehavior = qb;
        },
        enumerable: true,
        configurable: true
    });
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.swim = function () {
        console.log("Swimming...");
    };
    return Duck;
}());
exports.default = Duck;

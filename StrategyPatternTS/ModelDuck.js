"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var FlyNoWay_1 = require("./FlyNoWay");
var Quack_1 = require("./Quack");
var ModelDuck = /** @class */ (function (_super) {
    __extends(ModelDuck, _super);
    function ModelDuck() {
        var _this = _super.call(this) || this;
        _this.fliesBy = new FlyNoWay_1.default();
        _this.quacksBy = new Quack_1.default();
        return _this;
    }
    ModelDuck.prototype.display = function () {
        console.log("I'm a model duck");
    };
    return ModelDuck;
}(Duck_1.default));
exports.default = ModelDuck;

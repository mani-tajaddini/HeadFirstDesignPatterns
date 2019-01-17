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
var FlyWithWings_1 = require("./FlyWithWings");
var Quack_1 = require("./Quack");
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super.call(this) || this;
        _this.fliesBy = new FlyWithWings_1.default();
        _this.quacksBy = new Quack_1.default();
        return _this;
    }
    MallardDuck.prototype.display = function () {
        console.log("I'm a Mallard Duck...");
    };
    return MallardDuck;
}(Duck_1.default));
exports.default = MallardDuck;

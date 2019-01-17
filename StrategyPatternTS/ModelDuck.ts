import Duck from "./Duck";
import FlyNoWay from "./FlyNoWay";
import Quack from "./Quack";

export default class ModelDuck extends Duck {
    constructor(){
        super();
        this.fliesBy = new FlyNoWay();
        this.quacksBy = new Quack();
    }

    display(): void {
        console.log("I'm a model duck")
    }
}
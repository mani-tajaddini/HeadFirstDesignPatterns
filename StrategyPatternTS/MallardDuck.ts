import Duck from "./Duck";
import FlyWithWings from "./FlyWithWings"
import Quack from "./Quack"

export default class MallardDuck extends Duck {
    constructor() {
        super();
        this.fliesBy = new FlyWithWings();
        this.quacksBy = new Quack();
    }

    display(): void {
        console.log("I'm a Mallard Duck...")
    }
}
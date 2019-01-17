import FlyBehavior from "./FlyBehavior";
import QuackBehavior from "./QuackBehavior";

export default abstract class Duck {
    private flyBehavior: FlyBehavior;
    private quackBehavior: QuackBehavior;

    protected constructor(){}

    set fliesBy(fb: FlyBehavior) {
        this.flyBehavior = fb;
    }

    set quacksBy(qb: QuackBehavior) {
        this.quackBehavior = qb;
    }

    abstract display(): void;

    performFly(): void {
        this.flyBehavior.fly();
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }

    swim(): void {
        console.log("Swimming...");
    }
}
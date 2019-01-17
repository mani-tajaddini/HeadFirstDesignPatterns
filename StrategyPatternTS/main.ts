import Duck from "./Duck";
import MallardDuck from "./MallardDuck";
import ModelDuck from "./ModelDuck";
import FlyRocketPowered from "./FlyRocketPowered";

let mallard: Duck = new MallardDuck();
mallard.performQuack();
mallard.performFly();

let model: Duck = new ModelDuck();
model.performFly();
model.fliesBy = new FlyRocketPowered();
model.performFly();

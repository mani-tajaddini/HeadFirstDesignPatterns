public class MallardDuck extends Duck {
    public MallardDuck(){
        setFlyBehavior(new FlyWithWings());
        setQuackBehavior(new Quack());
    }

    public void display(){
        System.out.println("I am a Mallard Duck");
    }
}
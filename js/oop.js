// Encapsulation

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        // return("Hello " + this.name + " your age is " + this.age);
        return (`Hello ${this.name} your age is ${this.age}`);
    }

}

const person1 = new Person('John', 30);



console.log(person1.greet()); // Hello John


// Polymorphism
class Animal {
    name = "Animal";
    speak() {
        console.log(this.name + " speaks");
    }
}

const myAnimal = new Animal();
myAnimal.speak(); // Animal speaks

////////////////////////
class Dog extends Animal {
    name = "Dog";
    speak() {
        console.log(this.name + " barks");
    }
}

const myDog = new Dog();
myDog.speak(); // Dog barks



//  Abstraction
class Car {
    #enginStatus = false; // private property

    start() {
        this.#enginStatus = true;
        // this.#enginStatus ? console.log("Car started") : console.log("Car not started");

        if (this.#enginStatus) {
            console.log("Car started");
        }
        else {
            console.log("Car not started");
        }
    }
}

const myCar = new Car();
myCar.start(); // Car started

// console.log(myCar.#enginStatus)
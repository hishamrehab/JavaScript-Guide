// __proto__ 

const dude = {};

dude.nane = "Sefsdlfs";
dude.age = 23



// Prototype Chain 

const myBrothers = ["Ben", "Sam"];
myBrothers.__proto__

class Human {
    talk() {
        return "Talking";
    }
}

class SuperHuman extends Human {
    fly() {
        return "Flying";
    }
}
const ben = new SuperHuman();

ben.fly();


// Prototype

function Dude(name) {
    this.name = name;
}

const me = new Dude("Sina");

me.prototype // undefined
Dude.prototype // constructor
me.__proto__ // constructor

me.__proto__ === Dude.prototype // true



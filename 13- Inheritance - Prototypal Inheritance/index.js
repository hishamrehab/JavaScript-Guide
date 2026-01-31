// Inheritance using Classes
class Person {
    talk() {
        return "Taking"
    }
}

const me = new Person();
const you = new Person();

console.log(me.talk());  // Talking
console.log(you.talk()); // Talking



// To update the function for both instances you only have to do it once:
Person.prototype.talk = function () {
    return "New and improved Talking";
}


// Inheritance using a Constructor Function
function Person() { };
Person.prototype.talk = function () {
    return "Talking";
}

const me = new Person();
const you = new Person();

me.talk(); // Talking
you.talk(); // Talking


// Inheritance using pure objects with Object.create
const person = {
    talk() {
        return "Talking";
    }
}

const me = Object.create(person);
me.talk();


// Inheritance using pure objects with Object.setPrototypeOf
const person = {}
person.__proto__.talk = function () {
    return 'Talking';
}
const me = {};
Object.setPrototypeOf(me, person);
me.talk(); // Talking


// Extending a Class using 'extends'
class Person {
    talk() {
        return "Talking";
    }
}

class SuperHuman extends Person {
    fly() {
        return "Flying";
    }
}

const me = new Person();
console.log(me.talk()); // Talking

const you = new SuperHuman();
console.log(you.fly()); // Flying
console.log(you.talk()); // Talking
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





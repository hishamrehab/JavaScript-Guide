
// Factory Function and Conatructor Func
function createPerson(name, age) {
    return {
        name,
        talk() {
            return `I am ${this.name}`
        }
    }
}


const me = createPerson('Sian');
const you = createPerson("Hello");

me.talk = function () {
    return `Hello , I am ${this.name}`
}

console.log(me.talk());
console.log(you.talk());

Object.prototype === me.name.__proto__;

Object.prototype.speak = function () {
    return `Hello`
}

window.speak();  // Oh Khelloo



// function createPerson(name) {
//     return Object.create();
// }

const myCoolProto = {
    talk() {
        return `Hello , I am ${this.name}`
    }
}



function createPerson() {
    return Object.create(myCoolProto, {
        name: {
            value: name
        }
    });
}

const me = createPerson("Sian");

me.talk();

// Constructor 

function Person(name) {
    this.name = name;
}
const ben = new Person("Ben");

Person.prototype.talk = function () {
    return `Hello , I am ${this.name}`
}


ben.talk();

const Sam = new Person("Sam");
Sam.talk();


Person.prototype.talk = function () {
    return `HELLO , I am ${this.name}`
}



// Factory does not implement the inheritace by default like as contructor function
function createPerson(name) {
    return {
        talk() {
            return `Hello , I am ${this.name}`
        }
    }
}

const me = createPerson("Sian");
const you = createPerson("Hello");
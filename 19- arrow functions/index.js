// const sayHello = function () {
//     return "hello"
// }


const sayHello1 = () => {
    return "hello"
}

sayHello1();


const sayHello3 = (name) => {
    return `Hello , ${name}`
}

sayHello3();


// const sayHello = (firstName, lastName) => {
//     return `Hello , ${firstName} ${lastName}`
// }

// sayHello("Sina", "Jaz");



// const sayHello = function () {
//     console.log(arguments);
// }

// sayHello("sina", "jaz");

const sayHello = () => {
    console.log(arguments);
}

sayHello("sina", "jaz", 14);




const sayHello2 = (name) => {
    return `Hello ${name}`
}


const sayHello4 = (firstName, lastName) => {
    return `Hello ${firstName} ${lastName}`
}

sayHello("sina", "jaz");



const sayHello = function () {
    console.log(arguments);
}

sayHello("Sian", "JaZ", 14);

// Callback function 
setTimeout(() => {
    console.log("Hello")
}, 1000);


function sayHello() {
    console.log("Helo");
}



const sayHello = () => {
    console.log("Helllo")
}


// Constructor
function Person(n) {
    this.name = n;
}

const me = new Person("Sina");

// const Person = (n) {
//     this.name =
// }




// Object Method

const me = {
    talk: function () {
        return "Hello"
    }
}


const you = {
    talk: () => {
        return "hello"
    }
}

you.talk();


// Arrow Funciotns Benefits
const me = {
    name: "Sina",
    talk: () {
        return this
    },
    arrowTalk: () => {
        return this
    }
}

me.talk();





const me = {
    neme: "Sina",
    talk() {
        setTimeout(function () {
            console.log(this.name)
        }, 100)
    }
}


function Person(n) {
    this.name = n;
}

Person.prototype.talk = function () {
    return this
}


Person.prototype.arrowTalk = () => {
    return this
}

const me = new Person("Sina");
me.talk();
me.arrowTalk();


// Person.prototype.some

Person.prototype.arrowTalk = () => {
    return this
}


// Not to use the contructor function
const Person = () => {

}

const me = new Person(); /// Person is not a constructr


// with event handlers
document.body.addEventListener("click", () => {
    console.log(this);
})



// Person.prototype.someOtherFunction 
Person.prototype.arrowTalk = () => {
    return this
}


document.body.addEventListener("click", function () {
    console.log(this);
})
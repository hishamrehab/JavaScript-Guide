// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }


// class Person extends AgedPerson {
//     name  = "Max";
    
//     constructor() {
//         super();
//         this.age= 30;
//     }

    // greet = () => {
    //     console.log(
    //         "Hi , I am" + this.name + "and I am" + this.age + "years old"
    //     );
    // }


    // class Person{
    //     name = "Max";
    //    // this.greet = function() {....}
    // };

    // greet = () => {
    // console.log(
    //         "Hi , I am" + this.name + "and I am" + this.age + "years old"
    // );
    // }

// Person.prototype.greet = function() {
//     console.log(
//         "Hi , I am" + this.name + "and I am" + this.age + "years old"
//     );
// }


// Person.discribe = function() {
//     console.log("Creating Persons....");
// }

// Person.prototype.printAge = function() {
//     console.log(this.age);
// }


// console.dir(Person);

// const person = new Person();
// person.greet(); 
// person.printAge();
// console.log(person);
// console.log(person.toString());

// const p2 = new person.__proto__.constructor();
// console.log(p2);
// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById("but");
// button.addEventListener("click" , p.greet());


const course = {
    title: "Javascript ",
    rating : 5
}; // new Objec

Object.defineProperty(student , "progress" , {
    configurable: true,
    enumerable: true,
    value: 0.7,
    writable: false
})

console.log(Object.getPrototypeOf(course));
console.log(Object.setPrototypeOf(course , {
    ...Object.getPrototypeOf(course),
    printRating : function() {
        console.log(`Rating : ${this.rating}/5`);
    }
}));


const student = new Object.create({printProgress: function() {
    console.log(this.progress);
}},{
    name: {
        configurable: true,
        enumerable: true,
        value: "Max",
        writable: true
    },

});

student.printProgress();
 console.log(student);

course.printRating();
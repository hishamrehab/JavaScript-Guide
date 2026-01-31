function Person(name) {
    this.name = name;
    this.talk = () => {
        return `Hello I am ${this.name}`
    }
}


const sina = new Person('Sina');

const ben = new Person('Ben');

const mostafa = new Person('mostafa');

console.log(sina);



// Another Example 
function SuperElement(type, content) {
    this.el = document.createElement(type);
    this.el.innerText = content;
    this.body.append(this.el);
    this.el.addEventListener("click", () => {
        console.log(this.el);
    })
}


const h1 = new SuperElement("h1", "Hello World");
const h2 = new SuperElement("h2", "Hello World");
const h3 = new SuperElement("h3", "Hello World");



const array = ["a", "b", "c", "d"];
const myElements = array.map((item) => {
    return new SuperElement("h1", item)
});

console.log(myElements);

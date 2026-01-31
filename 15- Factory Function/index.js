// Factroy Func is a func for creating objects
// Problem
const me = {
    name: "Sina",
    talk() {
        return `Hello I ama Hisham ${this.name}`
    }
}

const ben = {
    talk() {
        return `Hello I ama Ben`
    }
}

me.talk();
ben.talk();


// Factroy Func
function personFactory(name) {
    const obkect = {
        name,
        talk() {
            return `Hello I am ${name}`
        }
    }
}

// const me = personFactory("Sina")


function personFactory(name) {
    const object = {
        name,
        talk() {
            return `Hello I am ${name}`
        }
    }
    return object;
}


const me = personFactory("Sina");

const ben = personFactory("Ben")
ben.talk;

const jill = personFactory("Dr .Jill");



function createElement(type, text, color) {
    const el = document.createElement(type)
    el.innerText = text
    document.body.append(el)
    return {
        el,
        setText(text) {
            el.innerText = text
        },
        setColor(color) {
            el.style.color = color
        }
    }
}


const h1 = createElement("h1", "Hello", red);

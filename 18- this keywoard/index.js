// this
if (true) {
    console.log(this);
}

function talk() {
    return this;
}


const me = {
    name: "Sina",
    talk: talk
}

me.talk();
talk();
window.talk();



function talk() {
    return `I am ${this.name}`;
}

const me = {
    name: "Sina",
    talk: talk
}

const you = {
    name: "Qoli",
    talk: talk
}

me.talk();
you.talk();
window.talk();


function talk() {
    return `I am ${this.name}`;
}

const me = {
    name: "Sina"
}

// Function.prototype.bind
talk.bind(me);

const meTalk = talk.bind(me);
meTalk();


talk.bind(me);

talk.bind(me)();

talk.call(me);
talk.apply(me);


talk.call(me);
talk.apply(me);


function talk() {
    if (lang === "en") {
        return `Hello , I am ${this.name}`;
    } else if (lang === "it") {
        return `Ciao , Io sono${this.name}`;
    }
}


function Person(n) {
    this.name = n;
    this.talk = function () {
        console.log(this);
    }
}

const me = me.talk();


function Person(n) {
    this.name = n;
    talk.talk = function () {
        console.log(this);
    }
    setTimeout(function () {
        console.log(this);
    }, 100)
}


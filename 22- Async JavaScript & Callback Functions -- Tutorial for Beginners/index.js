
// synchronous operations 
let pizza
function orderPizza() {
    console.log("Order Pizza")
    setTimeout(() => {
        pizza = `pizza`
        console.log(`${pizza} is ready`);
        console.log(pizza);
        console.log("pizza was ordered");
    }, 3000)
}

orderPizza();
console.log("Call Ali");
console.log(`Eeat ${pizza}`);




// asynchronous operations
function orderPizza(callback) {
    setTimeout(() => {
        const pizza = "pizza"
        callback(pizza)
    }, 2000)
}


function pizzaReady(pizza) {
    console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady);
console.log("Call Ali");


window.addEventListener("click", function () {
    console.log("clicked");
})



window.addEventListener("click", callback);


function callback() {
    console.log("clicked");
}



function thing1() {
    // call pizza shop
}

function thing2() {
    // order pizza shop
}

function thing3() {
    // eat pizza shop
}


function thing1(callback) {
    callback()
}


function thing2(callback) {
    callback()
}

function thing3(callback) {
    callback()
}

// call back hell 
this(() => {
    thing2(() => {
        thing3()
    })
})
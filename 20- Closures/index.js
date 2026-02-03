function human(name) {
    function sayHi() {
        console.log(`Hi I am ${name}`);
    }
    function sayHowYouFeal() {
        console.log(` ${name}  is feeling good`);

    }
    sayHi();
    sayHowYouFeal();
    return {
        sayHi,
        sayHowYouFeal
    }
}




const sina = human("sina");
const qoli = human("Qoli");






// problem
document.getElementById("size-12").onclick = function () {
    document.body.style.fontSize = `12px`
}


document.getElementById("size-14").onclick = function () {
    document.body.style.fontSize = `14px`
}


document.getElementById("size-16").onclick = function () {
    document.body.style.fontSize = `16px`
}




// clickHandler
function clickHandler(size) {
    return function () {
        document.body.style.fontSize = `${size}px`
    }
}

document.getElementById("size-12").onclick = clickHandler(12)




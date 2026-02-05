function getWeather() {
    return new Promise(
        function (resolve, reject) {
            setTimeout(() => {
                resolve("Cloudy")
            }, 100)
        }
    )
}


function getWeatherIcon(weather) {
    return new Promise(
        function (resolve, reject) {
            setTimeout(() => {
                switch (weather) {
                    case "Sunny":
                        resolve("sunny")
                        break;
                    case "Cloudy":
                        resolve("cloudy")
                        break;
                    case "Rainy":
                        resolve("rainy")
                        break;
                    default:
                        reject("No ICon Found")
                }

                resolve("Sunny")
            }, 100)
        }
    )
}


function onSuccess(data) {
    console.log(`Success param ${data}}`)
}


function onError(error) {
    console.log(`Error : ${error}}`)
}


getWeather()
    .then(getWeatherIcon)
    .then(onSuccess)
    .catch(onError)


// Another example 

function fun1() {
    console.log("Function 2")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("404")
        }, 100)
    });
}


function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success")
        }, 100)
    });
}


function onSuccess(data) {
    console.log(`Success : ${data}`)
}


function onError(errorCode) {
    console.log(`Error : ${errorCode}`)
}

function onFinally() {
    console.log("Finally We Be Done TD")
}

fun1()
    .then(fun2)
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally)



// Another Example 
function fetchData() {
    return new Promise(function (resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    })
}

function displayData(weather) {
    console.log(weather)
}

function onError(err) {
    console.log(`ERROR : ${err}`)
}




fetchData()
    .then(displayData)
    .catch(onError)



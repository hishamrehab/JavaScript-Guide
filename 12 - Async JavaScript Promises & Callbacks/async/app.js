const button = document.querySelector('button');
const output = document.querySelector('p');


const getPostion = (opts) => {
  const promise = new Promise((resolve , reject) => {
   navigator.geolocation.getCurrentPosition(success => {
    resolve(success);
   } , error => {
    reject(error);
   }, opts);
  });
  return promise;
}



const setTimer = (duration) => {
  const promise = new Promise((resolve , reject) => {
  setTimeout( () => {
    resolve("Done!");
} , duration);   
  });

return promise;
}


function trackUserHandler() {
  let positionData;
   getPostion()
   .then(
    posData => {
    positionData = posData;
    console.log(positionData);
   return setTimer(2000)
   })
   .then(data => {
    console.log(data);
   })
   .catch(
     error => {
    console.log(error , positionData);
    return "Something went wrong!..."
   })
    setTimer(2000).then(result => {
      console.log(result);
    })
   console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for (i = 0 ; i < 1000000; i++) {
//   result += i;
// }

// console.log(result);

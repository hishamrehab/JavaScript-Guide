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



const setTimer =  (duration) => {
  const promise = new Promise((resolve , reject) => {
  setTimeout( () => {
    resolve("Done!");
} , duration);   
  });

return promise;
}


async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
   posData = await getPostion();
   timerData = await setTimer(2000);
  console.log(timerData , posData);
  }catch(error) {
    console.log(error);
  }

  //  .then(
  //   posData => {
  //   positionData = posData;
  //   console.log(positionData);
  //  return setTimer(2000);
  //  })
  //  .then(data => {
  //   console.log(data);
  //  })
  //  .catch(
  //    error => {
  //   console.log(error , positionData);
  //   return "Something went wrong!..."
  //  })
  //   setTimer(2000).then(result => {
  //     console.log(result);
  //   })
  //  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for (i = 0 ; i < 1000000; i++) {
//   result += i;
// }

// console.log(result);

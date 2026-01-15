const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
   navigator.geolocation.getCurrentPosition(posData => {
   setTimeout(()  => {
     console.log(posData);
   }, 2000);
   }, error => {
    console.log(error);
   });
   setTimeout() => {
    console.log('Getting position...');
   }
   console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for (i = 0 ; i < 1000000; i++) {
//   result += i;
// }

// console.log(result);

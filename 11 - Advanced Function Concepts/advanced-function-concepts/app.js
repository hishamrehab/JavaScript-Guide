// Pure Func
function add(num1, num2) {
return num1 + num2;
}

console.log(add(1 , 2));
console.log(add(12 , 25));

// In Pure Func

function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5));


// SideEffect 

let previousResult = 0;

function addMoreNumbers(num1 , num2) {
  const sum = num1 + num2;
  previousResult = sum
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ["Sports" , "Cooking"];

function printHobbies(h) {
    h.push("NEW HOBBY");
    console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

// Factory Functions
function createTaxCalculator(tax) {
    function calculateTax(amount) {
        console.log(multiplier);
        return amount * tax * multiplier;
    }

    return calculateTax;
}


const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let username = "Max";


function greetUser() {
    let name = "Anna";
    console.log("Hi " , name);
}

let name = "Hisham";

greetUser();

// Recursion

// function powerOf(x, n) {
//   let result = 1;
  
//   for(let i = 0 ; i< n ; i++) {
//     result *= x
//   }

//   console.log("result" , result);
//   return result;
// }

// Recurtion
function powerOf(x, n) {
//     if(n === 1) {
//         return x;
//     }
//  return x * powerOf(x , n- 1);

return n === 1 ? x : x * powerOf(x , n- 1);
}


console.log(powerOf(2, 3));
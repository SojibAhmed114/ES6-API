const numbers = [25, 84, 96, 54, 78, 45];
numbers[1] = 100;
numbers[3] = 500;
numbers.push(200, 200, 200);
console.log(numbers); 

const student = {
    name: "sojib",
    class: 12
}

student.name = "safi ahmed";
console.log(student); 

let sum = 0;
for (let index = 0; index < 10; index++) {
    const num = index;
    sum += num;
}

function checks (num1, num2) {
    const results = num1 + num2;
    console.log(num1, num2, results);
    return results;
}
const values = checks(40, 58);

// dafault parameter numbers values 
function defaults(names1, names=5) {  //number hole parameter = 0 or 1 nite hoy
    const total = names1 + names;
    console.log(names1, names, total); 
    return total;
}
const value2 = defaults(5, 10);

// dafault parameter string values 
function fullName(firstName, lastName = "") {  // string parameter hole = "" empty string nite hoy
    const fullNames = firstName + " " + lastName;
    console.log(fullNames); 
    return fullNames;
}
const useNames = fullName("sojib");

// dafault parameter array values  
function isArray(myArray = []) { // array hole parameter = [] empty array nite hoy
    //  your some code
}

// dafault parameter object values  
function isArray(myArray = []) { // array hole parameter = {} empty object nite hoy
    //  your some code
}

const firstName = "sojib";
const middleName = "ahmed";
const lastName = "safi";
const myName = firstName + " "+ middleName + " "+ lastName;
console.log(myName); 

// use backtick key 
const a = 50;
const b = 58;
const result = "the sum of" + a + " and " + b +" is " + (a + b);
console.log(result);  
//best away dynamic string:
const result1 = `the sum of ${a} and ${b} is ${a + b}`
console.log(result1);

// more  backtick key
const num = [85, 48, 54, 85];
const obj = { name: "sojib", age:500 }
const arrObj = `the value of ${num[2]} and ${num[1] + obj.age}`;
console.log(arrObj); 


// \n means line break 
const para = "my name is sojib \n" + "i live in bangladesh";
console.log(para); //line brack
//best away line break
const paragraph = `hi
I am sojib ahmed safi
this is a 3rd line`;
console.log(paragraph); 


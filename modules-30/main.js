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
function defaults(names1, names=5) {
    const total = names1 + names;
    console.log(names1, names, total); 
    return total;
}
const value2 = defaults(5, 10);

// dafault parameter string values 
function fullName(firstName, lastName = "") {
    const fullNames = firstName + " " + lastName;
    console.log(fullNames); 
    return fullNames;
}
const useNames = fullName("sojib");

// dafault parameter array values 

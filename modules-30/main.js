const numbers =[25, 84, 96, 54, 78, 45];
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
console.log(sum); 
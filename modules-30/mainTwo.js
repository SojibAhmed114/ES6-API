//function declaration
function add(a, b) {
    return a + b;
}

//function expression
const add2 = function (a, b) {
    return a + b;
}

// arrow function
const add3 = (a, b) => a + b;

const values = add3(54, 80);
console.log(values); 

// more try
const totalMarks = (marks1, marks2) => marks1 + marks2;
const marks = totalMarks(10,10);
console.log(marks); 

//ES5 normal function  and ES6 arrow function 
function mul(num10, num12) {
    const total = num10 + num12;
    return total;
}
const man = mul(20, 20)
console.log(man); 

const multi = (num13, num14) => num13 + num14;
const value = multi(50, 50);
console.log(value); 
//ES5 normal function  and ES6 arrow function 
function mul(num10, num12) {
    const total = num10 + num12;
    return total;
}
const man = mul(20, 20)
console.log(man); 

const multi = (num13, num14) => num13 + num14;
const values = multi(50, 50);
console.log(values);
//..................................


// single parameter arrow function
const getObj = (personAge) => personAge.age;
const obj = { name: "sojib", age: 500 };
const sent = getObj(obj);
console.log(sent); 
//............................
const getArrayData = numbers => numbers[2];
const Data = getArrayData([84, 98, 908, 97, 65, 32, 20]);
console.log(Data); 


//no or empty parameter
const getPi = () => Math.PI;
const get = getPi();
console.log(get); 

// large arrow function
const large = (x, y, z) => {
    const sum = x + y + z;
    const multi = x * y * z;
    const total = sum + multi;
    return total;
}
const sentData = large(50, 10, 30);
console.log(sentData); 

const getAge = (person) => person.age;
const students = { name: "safi Ahmed", age: 100 } 
const puts = getAge(students);
console.log(puts); 



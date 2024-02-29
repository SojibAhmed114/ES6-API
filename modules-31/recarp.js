// destructuring from array old system 
const dataOne = [54, 56, 58, 875, 95];
const getDataOne = dataOne[1];
const getDataTwo = dataOne[4];
console.log(getDataOne, getDataTwo);

//es6 new system 
const dataTwo = [54, 56, 58];
const [num1, num2, num3 ] = dataTwo;
console.log(num2);


//.............................
// destructuring from object old and es6 system 
const myObject = {
    name: "sojib",
    class: 12,
    isSscPass: true
}
// old 
const gets = myObject.class;
console.log("gets: ", gets);
// es6 
const { name , isSscPass } = myObject;
console.log(isSscPass);

//spread
const spreads = { ...myObject };
console.log("spreads: ", spreads);

//spread object join
let ones = { redius: "10px" };
let twos = { bgColor:"red"};
let joins = {
    ...ones,
    ...twos
}
console.log(joins);

//একটা array বা object এর মান বাদ দিয়ে অন্য মান গুলো destructuring করে আনতে পারি।
const destructuringRemove = {
    names: "sojib",
    class: 12,
    isSscPass: true
}
const {names,...rest } = destructuringRemove;
console.log(rest);
//{class: 12, isSscPass: true} 

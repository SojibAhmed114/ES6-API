// Object destructuring rules:
// let or const { object property name } = objectName;

const destructure = {
    personOne: "sojib",
    personTwo: "safi",
    YearOne: 2555,
    YearTwo: 2598
}
const { personOne, YearOne: YearSojib } = destructure;
console.log(personOne); //sojib
console.log(YearSojib); //2555 YearOne: YearSojib means object property name change


//Array destructuring rules
//let or const [Array property name] = Array variable name

const myArray = [45, 65];
const [first, second] = myArray;
console.log(first); //45

//..........
function Add(a, b) {
    return [a * 2, b * 2];
}
const [ones, twos] = Add(12, 15);
console.log(ones,twos); //24 30

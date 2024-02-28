let firstName = "sojib";
let name2 = "safi";
const fullname = "your name" +" "+ firstName + " " + name2;
console.log("fullname: ", fullname);

const bestWay = `your name ${firstName} and ${name2} `
console.log("bestway: ", bestWay);

// Array copy 
const friends = [74, 65, 85, 95, 65, 74, 58, 59];
const newFriends = [...friends];
console.log(newFriends);
newFriends.push(1000);
console.log(newFriends);


// multiplication normal function and arrow function 
function regularFunction(a, b) {
    const multi = a * b;
    return multi;
}
const sentData = regularFunction(40, 520);
console.log("sentData: ", sentData);

const multiP = (a, b) => a * b;
const sentData2 = multiP(50, 2);
console.log("sentData2: ", sentData2);

// dataCollection in Array 
const friendData = {
    name: "sojib",
    age: 400,
    village: "gaibandha"
}

const getData = (person) => person.age;
const sents = getData(friendData);
console.log("sents: ", sents);



const myArrays = [74, 85, 96, 65, 54, 21, 32];
for (const num of myArrays) {
    console.log(num);
}
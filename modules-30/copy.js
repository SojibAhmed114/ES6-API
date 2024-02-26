const max = Math.max(87, 98, 74, 54, 12, 90, 12, 254, 8, 4);
console.log(max); 

const arrayMax = [87, 98, 74, 54, 12, 90, 12, 254, 8, 4];
const maxNumber = Math.max(...arrayMax);
console.log(maxNumber); 
console.log(arrayMax); 

// more practice

const mathMarks = [87, 98, 96, 85, 74, 58, 65, 85, 695, 74, 5];
const englishMarks = [...mathMarks,6000];
console.log(englishMarks);
englishMarks.push(4844444);
console.log(englishMarks);

const combine1 = [54, 98, 525, 636, 52541, 1425, 52];
const combine2 = [10, 21, 32, 35, 363, 39, 74];
const combineArray = [...combine1, ...combine2];
console.log(combineArray);


// notes 
const myArray = [58, 47, 98, 52, 36, 97, 100];
const maxArrayNumber = Math.max(...myArray);
console.log(maxArrayNumber); //100

// use spread operator to copy
const friend = [98, 78, 58, 65, 47, 52, 63];
const dosto = friend;

const bondhu = [...friend , 1000];
console.log(bondhu); //[98, 78, 58, 65, 47, 52, 63,1000]
friend.push(5000);
console.log(friend);  //[98, 78, 58, 65, 47, 52, 63,5000]




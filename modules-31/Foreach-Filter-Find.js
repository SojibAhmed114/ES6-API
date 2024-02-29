//foreach অনেকটা map এ মতো কাজ করে।
// map  কাজ করার  পর array return করে আপরদিকে foreach কাজ করে কিছুই return করে না। 

const forEachName = [41, 52, 63, 50];
const each = forEachName.forEach(x => x * 2);
console.log(each);
// undefined

// filder : শর্ত যারা যারা পূরণ করে তাদের তাদের দেয় । সবসময় array দিবে  কিছূ না পাইলে ফাকা ‍array দিবে।
const fil = [41, 52, 63, 85, 96, 74];
const result = fil.filter((para) => {
    return para > 70;
})
console.log(result);
// [85, 96, 74]

// more 
const evenNumber = [14, 25, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const onlyEvenNumber = evenNumber.filter(x => x % 2 === 0);
console.log("onlyEvenNumber: ", onlyEvenNumber);
// [ 14, 16, 18, 20, 22, 24 ]'

// more  
const length4 = ["safi", "sakil", "sojib", "alomgir","dim","sim"];
const len = length4.filter((lens) => {
    return lens.length < 4
}) 
console.log(len);
//["dim","sim"];

//find : শর্ত পূরণ করে একটা রেজাল্ট দিবে এবং একাধিক থাকলে তার মধ্যে থেকেও একটা দিবে । 
//রেজাল্ট array দেয়না আবার কিছূ না পাইলে undefined দেয়।
const findData = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6];
const getData = findData.find(data => data > 13);
console.log(getData);
// undefined
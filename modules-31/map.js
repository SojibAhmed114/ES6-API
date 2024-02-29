const myArrays = [1, 2, 3, 4, 5];
for (const array of myArrays) {
    let mulit = array * 2;
    console.log(mulit);
}

//map মূলত array এর মধ্যে কাজ করে , array কে লুপ করে প্রত্যেক উপাদান কে আলাদা করে আলাদা একটা array তৈরি করে ।
const myFriendsMarks = [500, 1500, 2500, 3500];
const result2 = myFriendsMarks.map(x => x * 2);
console.log(result2);


//more 2
const mapArrays2 = [100, 200, 300, 400, 500];
const fun = n => n * 2;
const marks2 = mapArrays2.map(fun);
console.log(marks2);
    
//more 3
const mapArrays = [1, 2, 3, 4, 5];
function makes(gets) {
    const multi = gets * 2;
    return multi;
}
const marks = mapArrays.map(makes);
console.log("marks: ", marks);



// more practice 
const check = [10, 20, 30, 40, 50];
function fu(man) {
    const result = man * 2;
    return result;
}
const pass = check.map(fu);
console.log("pass: ", pass);

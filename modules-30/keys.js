//object keys and value 
//const obj = {
    //name: "sojib", //এখানে name হলো keys
  //  subject: "bangla"; // এখানে subject হলো value
//}

//object থেকে keys নেওয়ার দরকার হলে।
const obj = {
    name: "pen",
    brand: "bashundhara",
    price: 12,
    isCleaned: true
}
const get = Object.keys(obj);
console.log(get);
// [ "name", "brand", "price", "isCleaned" ]


//object থেকে value নেওয়ার দরকার হলে।
const objectOne = {
    name: "pen",
    brand: "bashundhara",
    price: 12,
    isCleaned: true
}
const objs = Object.values(objectOne);
console.log(objs);
// [ "pen", "bashundhara", 12, true ]


//object থেকে নতুন array করে  এর ভেতরে প্র্রত্যেক টা keys ও value আলাদা আলাদা  array করে পেতে চাইলে 
//array of array 
const penName = {
    name: "pen",
    brand: "bashundhara",
    price: 12,
    isCleaned: true
}
const pen = Object.entries(penName);
console.log(pen);
// [ [ 'name', 'pen' ],[ 'brand', 'bashundhara' ],[ 'price', 12 ],[ 'isCleaned', true ]]

//Object থেকে keys ডিলেট করার নিয়ম
const deleteMe = {
    name: "pen",
    brand: "bashundhara",
    price: 12,
    isCleaned: true
}
// system one 
delete deleteMe.name;
console.log(deleteMe);
// { brand: "bashundhara", price: 12, isCleaned: true }

//system two
const { price, ...newObj } = deleteMe;
console.log(newObj);
// { brand: "bashundhara", isCleaned: true }




// Object freeze মানে হলো object এর মধ্যে কোন কিছু এড বা ডিলিট করতে দিবে না।
const freez = {
    name: "pen",
    brand: "bashundhara",
    price: 12,
    isCleaned: true
}
Object.freeze(freez);
delete freez.brand; //code not working
freez.newAdd = "bangladesh"; //code not working
console.log(freez);
// { name: "pen", brand: "bashundhara", price: 12, isCleaned: true }


// Object.freeze =  Read: yes, Create/add: No, Update: No, Delete:No
// Object.seal =    Read: yes, Create/add: No, Update: Yes, Delete:No



// object seal এটা অনেকটা freeze এর মতো।
const se = {
    name: "pen",
    brand: "bashundhara",
    price: 12,
    isCleaned: true
}
Object.seal(se);
se.price = 100;
console.log(se);
//{ name: "pen", brand: "bashundhara", price: 100, isCleaned: true }



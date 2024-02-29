// data access 
const data = [{ id: 1, name: "sojib", address: "saghata gaibandha" }]
const getaData = data[0].address;
console.log("getaData: ", getaData);
//saghata gaibandha


const data2 = [{ name: "sojib ahmed safi", age: 21, subject: "islamic history and culture" }];
const getData2 = data2[0].age;
console.log(getData2);


// Data access : object এর মধ্য থেকে array এর মধ্য থেকে আবার object এর মান
const product = {
    count: 6000,
    data:[
        { id: 1, brand: "lenovo", price: 70000 },
        { id: 2, brand: "apple", price: 170000 }
    ]
}
const values = product.data[1].price;
console.log("values: ", values);
//170000

//data access : optional chaining
const user = {
    id: 5000,
    name: "sakil ahmed",
    address: {
        street: {
            first: "10/12 len",
            second: "malibagh",
            thrid: "bogra"
        },
        city: "dhaka",
    }
}

const user2 = {
    id: 4851,
    name: "Abdus salam",
    address: {
        city: "dhaka",
        country:"bangladesh",
    }
}
const getOption = user.address.street?.second;
const getOption2 = user2.address.street?.second;
console.log(getOption, getOption2);
//malibagh
//undefined


// more practice optional chaining 
const persionOne = {
    roll: 14,
    name: "karun",
    details: [
        {ssc: "pass", great:4.15, quality: "good"},
        {ssc: "pass", great:4.15, quality: "good"}
    ]
}
const persionTwo = {
    roll: 104,
    name: "safi",
    details: [
        {ssc: "pass", great:4.15},
        {ssc: "pass", great:4.15}
    ]
}
const resutl = persionOne.details[1].quality;
const resutlTwo = persionTwo.details[1].quality;
console.log(resutl,resutlTwo);  
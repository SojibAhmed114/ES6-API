// const str = "I am a poor man";
// for (const iterator of str) {
//     console.log(iterator);
// }

//object theke values access
const obj = {
    name: "pen",
    brand: "bashundhara",
    price: 12,
    isCleaned: true
}
for (const proper in obj) {
    const value = obj[proper];
    console.log(value);
}
//pen bashundhara 12 true

//system two
const gets = Object.keys(obj);
for (const get of gets) {
    const value = obj[get]
    console.log(value);
}




const myFriendName = {
    name: "safi",
    Village: "saghata",
    Class: "honours",
    subject: "islamic history and culture",
    roll:205277
}
for (const friendData in myFriendName) {
    const values = myFriendName[friendData]
    console.log(values);
}


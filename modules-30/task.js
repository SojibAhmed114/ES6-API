let numberOne, numberTwo, numbeThree;
[numberOne, numberTwo, numbeThree] = [50, 100, 600];
console.log(numbeThree);

// task 1
const multi = (num1, num2, num3) => num1 * num2 * num3;
const setData = multi(2, 3, 4);
console.log("setData: ", setData);

//......
const multiLine = `I am a web developer
I love code
I love to eat biriyani`;
console.log(multiLine);

//...........
const sum = (numOne, numTwo = 500) => numOne + numTwo;
const setData2 = sum(40);
console.log("setData2: ", setData2);


// task 2

const getArry = (myArray) => {
    let ar = [];
    for (const a of myArray){
        if (a % 2 != 1) {
            ar.push(a)
        }
    }
    return ar;
}
const senArray = getArry([14, 25, 36, 69, 58, 47, 74]);
console.log("sentArray: ", senArray);


//....................
const getData = (getArray) => {
    let rece = [];
    for (let i = 0; i < getArray.length ; i++) {
        if (i % 2 === 0) {
            rece.push(i);
        } 
    }
    return rece;
}

const sentArray = getData([14, 25, 36, 69, 58, 47, 74]);
console.log("sentArray: ", sentArray);


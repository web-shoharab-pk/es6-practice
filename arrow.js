// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function myFun(num) {
//     return num * 2;
// }


const doubleIt = num => num * 2; // this is a arrow (>) function
const double = doubleIt(510);
 
const add = (x, y, z) => x+y+z;
const result = add(12, 51, 15);

const give10 = () => 10;
const result2 = give10();

console.log(double, result, result2);

const doMath = (x, y)=> {
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(150, 100);
console.log(result3);
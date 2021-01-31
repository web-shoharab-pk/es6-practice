

function add(num1, num2 = 10) { // if num2 value undefiend then num2 use her default value 10;
    //num2 = num2 || 0; or
    // if(num2 == undefined){
    //     num2 = 0;
    // } or
    return num1 + num2;
}
const total = add(1254);
console.log(total);
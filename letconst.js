const hubby = 'janina';
// hubby = 'ace akta' // you cannot assign another value in const
console.log(hubby);

const numbers = [15, 17, 18, 13, 20];
numbers[2] = 45;
numbers.push(50);
//numbers = ['shoharab', 'shohan', 'shohel']// you cannot assign another value in const
console.log(numbers);


let patientName = "shoharab pk";
patientName = "sundari bibi";
console.log(patientName);


let sum = 0;
for (let i = 0; i < 10 ; i++) {
     sum = sum + i;
     console.log(sum, i);  
}


let su = 0;
for (var i = 0; i < 100 ; i++) {
     su = su + i;
      
}
console.log(su, i);


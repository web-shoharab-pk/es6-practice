const ages = [17, 19, 20, 18, 22];
const ages2 = [22, 19, 20, 17, 15];
const ages3 = [23, 9, 21, 18, 19];

//const allAges = ages.concat(ages2).concat(25).concat(ages3);//ai systeam ar bodole niher system kaj kora jai
const allAges2 = [...ages, ...ages2, 55, ...ages3];
//console.log(allAges2);

const bussiness = 650;
const minister = 450;
const sochib = 250;
//const maximum = Math.max(bussiness, minister, sochib);

const takaPoisa = [650, 450, 250];
const maximum = Math.max(...takaPoisa);
console.log(maximum);
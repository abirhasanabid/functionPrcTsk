// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// let highestName = 'rahim';

// for (const heigh of heights2) {
//     if (heigh.length < highestName.length) {
//         highestName = heigh;
//     }
// }
// console.log(highestName);


let newStr = heights2[0];
let newArr = [];
for (const heigh of heights2) {
    if (heigh.length < newStr.length) {
        newStr = heigh;
    }
}
newArr.push(newStr);
console.log(newArr)


// console.log(...[2,3,4]);
// console.log([2,3,4]);
// console.log(2,3,4);

// const arr = [1,2,3];

// for(const a of arr){
//     console.log(a);
//     console.log();
// }



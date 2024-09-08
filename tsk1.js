/**
 * 
Task -1:
Find the lowest number in the array below.
 */

const heights2 = [167, 190, 120, 165, 137];

let heighstNumber = [0]

for (const heigh of heights2) {
    if (heigh > heighstNumber) {
        heighstNumber =heigh;
    }
}
console.log( 'heighest number of the array is :',heighstNumber);
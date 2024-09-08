/**
 * You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
 */

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phonePrice) {
    let sum = 0;
    let len = phonePrice.length;
    console.log(len);
    let avg;
    for (const phPrice of phonePrice) {
        sum += phPrice.price;
        avg =sum/len;
    }
    return avg;
}


const result = findAveragePhonePrice(phones);
console.log(result);
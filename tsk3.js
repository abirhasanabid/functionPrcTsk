function calculateElectronicsBudget(laptopQunatity, tabletesQuantity, mobileQuantity) {
    laptop = 35000;
    tablet = 15000;
    mobile = 20000;

    const totalLaptopPrice = laptop * laptopQunatity;
    const totalTablatePrice = tablet * tabletesQuantity;
    const totalMobilePrice = mobile * mobileQuantity;

    return totalLaptopPrice + totalTablatePrice + totalMobilePrice;

}

const laptopQunatity = 3;
const tabletesQuantity = 2;
const mobileQuantity = 1;
const result = calculateElectronicsBudget(laptopQunatity, tabletesQuantity, mobileQuantity);

console.log(result);
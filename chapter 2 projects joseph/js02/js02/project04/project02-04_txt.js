/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Joseph Gjelaj
      Date:   6/12/24

      Filename: project02-04.js
 */
 




// Function to display a numeric value as a text string in the format $##.## 
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

function calcTotal() {
    let cost = 0;

    const buyChicken = document.getElementById("chicken").checked;
    const buyHalibut = document.getElementById("halibut").checked;
    const buyBurger = document.getElementById("burger").checked;
    const buySalmon = document.getElementById("salmon").checked;
    const buySalad = document.getElementById("salad").checked;

    if (buyChicken) {
        cost += CHICKEN_PRICE;
    }
    if (buyHalibut) {
        cost += HALIBUT_PRICE;
    }
    if (buyBurger) {
        cost += BURGER_PRICE;
    }
    if (buySalmon) {
        cost += SALMON_PRICE;
    }
    if (buySalad) {
        cost += SALAD_PRICE;
    }

    document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

    const tax = cost * SALES_TAX;
    document.getElementById("foodTax").innerHTML = formatCurrency(tax);

    const totalCost = cost + tax;
    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);
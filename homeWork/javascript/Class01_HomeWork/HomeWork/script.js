let phonePrice = 119.95;
let quantity = 30;
let taxRate = 0.05;
let totalBeforeTax = phonePrice * quantity;
let taxAmount = totalBeforeTax * taxRate;
let totalWithTax = totalBeforeTax + taxAmount;
console.log("The total price for 30 phones, including tax, is: $" + totalWithTax);
const score = 400

const balance = new Number(100) // object creation of a number 
console.log(balance); //[Number: 100] <- output

console.log(balance.toString().length); // after convert it to string print the length of the string
console.log(balance.toFixed(3)); // after decimal three points

const otherNumber = 123.78784758758
console.log(otherNumber.toPrecision(3)); // doubt , return string
console.log(otherNumber.toFixed(3)) // 123.78784758758 to 123.787 

const hundreds = 10000
console.log(hundreds.toLocaleString()) // 10000 -> 10,000








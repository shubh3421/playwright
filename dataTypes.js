let a=5;
let b=10;
console.log(a+b);

let x="5";
let y="3";
console.log(x+y); // Output: "53" (string concatenation)

/*The same + symbol behaves differently depending on the data type.
This is why knowing data types is very important.  */

//In JavaScript, you do NOT declare the type. JavaScript figures it out automatically from the value. 

let data = 42
console.log(typeof data); // Output: "number"

data="hello";
console.log(typeof data); // Output: "string"

data = true;
console.log(typeof data); // Output: "boolean"

let itemPrice = 200;
let quantity = 3;
let discount = 50;

let subtotal = itemPrice * quantity;
let totalAfterDiscount = subtotal - discount;
let tax = totalAfterDiscount * 0.18;
let finalTotal = totalAfterDiscount + tax;

console.log("Subtotal: " + subtotal); // Output: Subtotal: 600
console.log("Total after discount: " + totalAfterDiscount); // Output: Total after discount: 550
console.log("Tax: " + tax); // Output: Tax: 99
console.log("Final total: " + finalTotal); // Output: Final total: 649

//String decaration
let firstName = "John"; 
let city = 'Mumbai'; 
let greeting = `Hello, John!`;

console.log(firstName); // Output: John
console.log(city); // Output: Mumbai
console.log(greeting); // Output: Hello, John!
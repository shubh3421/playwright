let age =13;

let isAdult = age >= 18;
let isteenager = age <18;

console.log(isAdult);
console.log(isteenager);
console.log(typeof isAdult);

//undefined
let userName; 
console.log(userName); 
console.log(typeof userName); 

//null
let selectedItem = null; 
console.log(selectedItem); 
console.log(typeof selectedItem); 

//adding two numbers
let a =10;
let b=20;
console.log("addition of two numbers is:",a+b);

// Type Coercion (Important Concept) 
let x="5";
let y=10;
console.log(x+y); // "510" (string concatenation)

// JavaScript → Dynamically Typed (type can change) 
let data = 40; 
console.log(typeof data); // number 
data = "Hello"; 
console.log(typeof data); // string 
data = true; 
console.log(typeof data); // boolean 

// Number Data Type 
let age1 = 25;              
let price = 20.23;        
let temperature = -6;     
// integer 
// decimal 
// negative 
let bigNumber = 10000000; // large number 
console.log(typeof age1); 
console.log(typeof price); 
console.log(typeof temperature); 
console.log(typeof bigNumber);

// real time example
let itemPrice = 200; 
let quantity = 3; 
let discount = 50; 
let subTotal = itemPrice * quantity;        
// 200 * 3 = 600 
let totalAfterDiscount = subTotal - discount; // 600 - 50 = 550 
let tax = totalAfterDiscount * 0.15;        
// 15% tax 
console.log("Subtotal:", subTotal); 
console.log("After Discount:", totalAfterDiscount); 
console.log("Final Amount:", totalAfterDiscount + tax); 

// String Data Type
// String = text (letters, numbers, symbols, spaces) 
// 3 ways to declare string 
let s1 = 'Single quotes'; 
let s2 = "Double quotes"; 
let s3 = `Backticks`; 
console.log(typeof s1); 
console.log(typeof s2); 
console.log(typeof s3);

//string exapmle
let firstName = "John";
let lastName = "Doe";
let mc = "MC";
let saale = "saale";
// Template literal (best practice) 
let greeting = `hello, ${firstName}!`;
console.log(firstName); 
console.log(lastName); 
console.log(greeting); 
console.log(firstName, lastName); // John Doe 
console.log(`A ,${firstName} ${lastName} ${mc} ${saale}`);


//Basic object
let person = {
    name: "Alice",
    age: 30,
    city: "Mumbai",
    isStudent: false
}
// Accessing values — dot notation
console.log(person);
console.log(person.name); // Alice
console.log(person.age); // 30
console.log(person.city);
console.log(person.isStudent); // false

// Accessing values — bracket notation 
console.log(person["name"]); // Alice
console.log(person["age"]);
console.log(person["city"]);
console.log(person["isStudent"]); // false

// Changing a value 
person.age = 31;
console.log(person.age); // 31

// Adding a new property
person.email = "alice@gmail.com"; 
console.log(person.email);
       //
// Deleting a property 
delete person.city; 
console.log(person.city);

let product1 = { 
  id:   1001,
  name:  "Maize Seeds", 
  sku:   "ABC123", 
  price:   50, 
  units: 20,
 category:    "Seeds", 
  isAvailable: true 
}; 

let totalValue = product1.price * product1.units; 
console.log("Product1: " + product1.name);
console.log("SKU: " + product1.sku);
console.log("Price: ₹" + product1.price);
console.log("Units: " + product1.units);
console.log("Total: ₹" + totalValue); 
console.log("Available: " + product1.isAvailable);  // Available: true 
console.log("Category: "  + product1.category);


let fruits = ["Apple", "Banana", "Mango", "Orange"]; 
// Access by index (starts at 0) 
console.log(fruits[0]);  // "Apple" 
console.log(fruits[1]);  // "Banana" 
console.log(fruits[3]);  // "Orange" 

console.log(fruits.length); // 4
console.log(fruits[fruits.length - 1]); // "Orange" (last item)

fruits.push("Grapes"); // Add to end
console.log(fruits.length); // 5
console.log(fruits[4]); // "Grapes"


fruits.pop(); // Remove last item
console.log(fruits.length); // 4

fruits.pop([2]);
console.log(fruits.length); // 3

// Check type 
console.log(typeof fruits);  //"object"  ← arrays are objects in JS! 
console.log(Array.isArray(fruits)); // true
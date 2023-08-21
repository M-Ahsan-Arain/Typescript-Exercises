/* Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car = 'subaru';

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');  // True

// Test 2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');  // False

// Test 3
let age = 18;
console.log("Is age > 21? I predict False.");
console.log(age > 21);  // False

// Test 4
console.log("Is age >= 18? I predict True.");
console.log(age >= 18);  // True

// Test 5
let temperature = 25;
console.log("Is temperature <= 30? I predict True.");
console.log(temperature <= 30);  // True

// Test 6
console.log("Is temperature > 30? I predict False.");
console.log(temperature > 30);  // False

// Test 7
let city = 'new york';
console.log("Is city === 'New York'? I predict False.");
console.log(city === 'New York');  // False

// Test 8
console.log("Is city.toLowerCase() === 'new york'? I predict True.");
console.log(city.toLowerCase() === 'new york');  // True

// Test 9
let isSunny = true;
console.log("Is it sunny? I predict True.");
console.log(isSunny);  // True

// Test 10
let hasUmbrella = false;
console.log("Do I have an umbrella? I predict False.");
console.log(hasUmbrella);  // False

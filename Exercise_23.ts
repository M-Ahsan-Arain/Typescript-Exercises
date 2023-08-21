/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
let fruit = 'apple';
let animal = 'lion';
let ages = 30;
let temperatures = 15;
let isRaining = true;
let hasUmbrellas = false;
let numbers = [1, 2, 3, 4, 5];
let colors = ['red', 'blue', 'green'];

// Tests for equality and inequality with strings
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit == 'apple');  // True

console.log("Is animal not equal to 'elephant'? I predict True.");
console.log(animal != 'elephant');  // True

// Tests using the lower case function
console.log("Is fruit (lowercase) equal to 'APPLE'? I predict True.");
console.log(fruit.toLowerCase() == 'apple');  // True

// Numerical tests
console.log("Is age greater than or equal to 18? I predict True.");
console.log(ages >= 18);  // True

console.log("Is temperature less than 0? I predict False.");
console.log(temperatures < 0);  // False

// Tests using "and" and "or" operators
console.log("Is it raining and I have an umbrella? I predict False.");
console.log(isRaining && hasUmbrellas);  // False

console.log("Is it raining or I have an umbrella? I predict True.");
console.log(isRaining || hasUmbrellas);  // True

// Test whether an item is in an array
console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers.includes(3));  // True

console.log("Is 6 in the numbers array? I predict False.");
console.log(numbers.includes(6));  // False

// Test whether an item is not in an array
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow'));  // True

console.log("Is 'red' not in the colors array? I predict False.");
console.log(!colors.includes('red'));  // False

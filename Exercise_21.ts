/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
Change an index in one of your programs to produce an index error.
 Make sure you correct the error before closing the program. */

let numbers:number[] = [1,2,3,4];

const invalidIndex = 10;

if(numbers.length<=invalidIndex || numbers.length>=invalidIndex){
    console.error("Error");
}

const validIndex = 2;
const correctValue = numbers[validIndex];
console.log("Corrected value: ",correctValue);
/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.*/

let guestsNames: string[] = ["Ali Ammar", "Abdul Hanan", "Azeem"];

console.log("dinner guests:");
for(let i =0;i<guestsNames.length;i++){
    console.log('-',guestsNames[i]);
}

const guestsNum: number = guestsNames.length;
console.log(`The number of people invited to dinner ${guestsNum}`);
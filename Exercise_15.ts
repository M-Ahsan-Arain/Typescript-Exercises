/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a 
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •
 Print a new set of invitation messages, one for each person in your list.*/

let moreGuest: string[] = ["Ali Ammar", "Abdul Hanan", "Asim"];

moreGuest.unshift("Asad");

const newIndex = 3;
const newValue = "Moiez";
moreGuest.splice(newIndex,0,newValue);

moreGuest.push("Zain");

console.log("we found a bigger table");
console.log(`Hi ${moreGuest[0]}, would you like to go for a dinner?`);
console.log(`Hi ${moreGuest[1]}, would you like to go for a dinner?`);
console.log(`Hi ${moreGuest[2]}, would you like to go for a dinner?`);
console.log(`Hi ${moreGuest[3]}, would you like to go for a dinner?`);
console.log(`Hi ${moreGuest[4]}, would you like to go for a dinner?`);
console.log(`Hi ${moreGuest[5]}, would you like to go for a dinner?`);
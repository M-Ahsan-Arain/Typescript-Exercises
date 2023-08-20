/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
 have an empty list at the end of your program.*/

let moreGuest2: string[] = ["Ali Ammar", "Abdul Hanan", "Asim", "Asad", "Moiez", "Zain"];

console.log("Sorry i can invite only two people right now.");

const poppedElement = moreGuest2.pop();
console.log(`Sorry ${poppedElement} i cant invite you`);

const poppedElement2 = moreGuest2.pop();
console.log(`Sorry ${poppedElement2} i cant invite you`);

const poppedElement3 = moreGuest2.pop();
console.log(`Sorry ${poppedElement3} i cant invite you`);

const poppedElement4 = moreGuest2.pop();
console.log(`Sorry ${poppedElement4} i cant invite you`);

console.log(`Hi,${moreGuest2[0]} you are still invited`);

console.log(`Hi,${moreGuest2[1]} you are still invited`);

const poppedElement5 = moreGuest2.pop()
const poppedElement6 = moreGuest2.pop()
console.log(moreGuest2);

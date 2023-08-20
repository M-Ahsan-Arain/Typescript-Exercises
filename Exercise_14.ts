/* Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list*/

let newGuestNames:string[] = ["Ali Ammar", "Azeem", "Abdul Hanan"];
const poppedElement1 = newGuestNames.pop();
console.log(`${poppedElement1} is not coming.`);

newGuestNames.push("Asim");
console.log(`Hi ${newGuestNames[0]}, would you like to go for a dinner?`);
console.log(`Hi ${newGuestNames[1]}, would you like to go for a dinner?`);
console.log(`Hi ${newGuestNames[2]}, would you like to go for a dinner?`);


/* Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/

let newGuestNames:string[] = ["Ali Ammar", "Azeem", "Abdul Hanan"];
const poppedElement = newGuestNames.pop();
console.log(`${poppedElement} is not coming.`);

newGuestNames.push("Asim");
console.log(`Hi ${newGuestNames[0]}, would you like to go for a dinner?`);
console.log(`Hi ${newGuestNames[1]}, would you like to go for a dinner?`);
console.log(`Hi ${newGuestNames[2]}, would you like to go for a dinner?`);
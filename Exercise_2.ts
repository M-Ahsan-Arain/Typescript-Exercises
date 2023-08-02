/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

let personName:string = "ahsan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());

const newName = personName.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log(newName);
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() 
with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`Great ${magician}`);
    }
    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Original list of magicians' names
const magicians: string[] = ["Harry", "David", "Chris"];

// Make a copy of the original list with "Great" added to each name
const great_Magicians: string[] = makeGreat([...magicians]);

// Show the original list of magicians
console.log("Original Magicians:");
showMagicians(magicians);

// Show the list of magicians with "Great" added
console.log("\nGreat Magicians:");
showMagicians(great_Magicians);

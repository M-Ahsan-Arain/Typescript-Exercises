/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array 
of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified. */

function magicianNames1(names:string[]){
    for(let i=0; i<names.length; i++){
        const magician_names = names[i];
        console.log(magician_names);
    }
}

function greatMagicians(names:string[]){
    const great_magician:string[] = [];
    for(let i=0; i<names.length;i++){
        great_magician.push(`${names[i]} the Great`);
    }
    for(let j=0;j<great_magician.length; j++){
        const magician_names = great_magician[j]
        console.log(magician_names);
    }

}

const magician_Names1:string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

console.log("original Magicians: ");
magicianNames1(magician_Names1);

console.log("Great Magicians:");
greatMagicians(magician_Names1);

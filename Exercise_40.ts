/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array. */

function magicianNames(names:string[]){
    for(let i=0; i<names.length; i++){
        const magician_names = names[i];
        console.log(magician_names);
    }
}

const magician_Names:string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

magicianNames(magician_Names);
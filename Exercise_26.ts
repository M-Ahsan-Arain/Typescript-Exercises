/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien*/

let alienColor3:string = "red";

if(alienColor3 === "green"){
    console.log("Congratulations you earned a five points");   
} else if(alienColor3 === "yellow"){
    console.log("Congratulations you earned a ten points");
} else if(alienColor3 === "red"){
    console.log("Congratulations you earned a fifteen points");
}
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default
 with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message. */

function makeShirt(size: string = "Large", message: string = "I Love Typescipt"){
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

makeShirt();

makeShirt("Medium");

makeShirt("Small", "Javascript is fun");
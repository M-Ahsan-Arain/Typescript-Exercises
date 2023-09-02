/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for 
certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, 
the if block should print a statement, such as You really like bananas!*/

let favFruits:string[] = ["banana", "mango", "oranges"];

if(favFruits.includes("banana")){
    console.log("you really like bananas!");
}
else if(favFruits.includes("mango")){
    console.log("you really like mangos!");
}
else if(favFruits.includes("oranges")){
    console.log("you really like oranges!");
}
else if(favFruits.includes("pinapple")){
    console.log("you really like pinapple!");
}
else if(favFruits.includes("guava")){
    console.log("you really like guava!");
}
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a 
message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

let currentUsers: string[] = ["Ahsan", "Altaf", "Hamza", "Hanan", "Ali"];
let newUsers: string[] = ["Ahsan", "Ali", "John", "Asad", "Saad"];
let takenUsers:string[] = [];
for(let i=0; i<newUsers.length; i++){
    let isTaken = false;
    for(let j=0; j<currentUsers.length; j++){
        if(currentUsers[j] === newUsers[i]){
            takenUsers.push(newUsers[i]);
            isTaken = true;
            break
        }
    }
    const availableUsers = newUsers.filter((username) => !takenUsers.includes(username));
    if(isTaken){
        console.log(`Username ${takenUsers} is already taken choose another one.`);
    }else {
        console.log(`Username ${availableUsers} is available.`);
        break
    }
}
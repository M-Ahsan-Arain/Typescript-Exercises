/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

let places: string[] = ["Paris", "NYC", "Tokyo", "Islamabad", "Rome"];

console.log('original array: ',places);

const sortedArray = [...places].sort();
console.log('sorted array: ',sortedArray);

console.log('original array: ',places);

const reverseSort = [...places].sort().reverse()
console.log('reverse alphabetical orde: ',reverseSort);

console.log('original order: ',places);

const reverse = [...places].reverse();
console.log('reverse order: ',reverse);

const original = reverse.reverse();
console.log('back to original: ',original);

const sortedAgain = places.sort();
console.log('order changed in sort: ',sortedAgain);

const sortedInReverse = places.sort().reverse()
console.log('order is changed in reverse alphabetic: ',sortedInReverse);
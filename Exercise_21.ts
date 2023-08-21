/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
Change an index in one of your programs to produce an index error.
 Make sure you correct the error before closing the program. */

const detectRange = (arr:number[], start:number, end:number) => {
    let result:number[];
    if(result = arr.slice(start,end)){ 
        return result;
    } else if(Error){
        if(Error instanceof RangeError){
            return `Range error: ${Error.message}`;
        }else{
            return `An error occured: ${Error}`
        }
    }
}

const myArray:number[] = [1,2,3,4,5];

const startRange = 1;
const endRange = 10;
const result2 = detectRange(myArray,startRange,endRange);

console.log(result2);

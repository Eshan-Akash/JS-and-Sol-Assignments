/* Create a function that takes an array of numbers and returns
"Boom!" if the digit 7 appears in the array. Otherwise, return "there is
no 7 in the array".
Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
None of the items contain 7 within them.
*/ 

let sevenBoom = (arr) => { 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 7){
            return console.log("Boom!");
        }
    }
    
    return console.log("there is no 7 in the array");
}

sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

function getSecondLargest(nums) {
    // Complete the function
    let max_num = Math.max(...nums);
    let second_max = 0;
    for (let i = 1; i < max_num; i++) {
        if (nums.includes(parseInt(max_num-i)) == true ){
            second_max = max_num - i;
            break;
        }
    }
    return second_max;
    
}


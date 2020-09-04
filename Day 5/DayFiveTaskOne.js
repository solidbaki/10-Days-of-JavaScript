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

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    // Variable declarations
    let A = expressions[0];
    let P = expressions[1];
    var answers = [];

    //Calculate s1 and s2
    var s1 = (P+Math.sqrt(Math.pow(P, 2)-16*A))/4;
    var s2 = (P-Math.sqrt(Math.pow(P, 2)-16*A))/4;
    
    answers.push(s1);
    answers.push(s2);
    
    return answers.sort();
}


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

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Create date object with date string, get day number and print
    let theDate = new Date(dateString);
    var theDay = theDate.getDay();
    if ( theDay == 0){
        dayName = "Sunday";
    }   else if (theDay == 1)   {
        dayName = "Monday";
    }   else if (theDay == 2)   {
        dayName = "Tuesday";
    }   else if (theDay == 3)   {
        dayName = "Wednesday";
    }   else if (theDay == 4)   {
        dayName = "Thursday";
    }   else if (theDay == 5)   {
        dayName = "Friday";
    }   else {
        dayName = "Saturday";
    }

    return dayName;
}



let theDay = "Saturday";

let weekDayMessage = "It is a week day";

// Here we have an "if" statement with a logical operator - but we are using the wrong one!
// We want to use OR to see if the day is Saturday OR Sunday
// Correct line 9 so it uses OR
if(theDay === "Saturday" || theDay === "Sunday"){
    weekDayMessage = "It is the weekend!";
}

console.log(weekDayMessage);


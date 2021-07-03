
// Change the value of myRole so your code prints "Good morning, get ready to learn!"
let myRole = "student";

let greeting = "Good morning, ";

// Here we have an "if/else" statement
if(myRole === "student"){
    greeting = greeting + "get ready to learn!";
}else{
    greeting = greeting + "get ready to teach!";
}

console.log(greeting);
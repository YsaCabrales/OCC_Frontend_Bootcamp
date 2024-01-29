console.log("Hello World!"); // statement 1

// Variables - containers
//Let - Block scope variable
let name = "Gab";
let myNumber = 12;
name = "Regel";
console.log("Name:", name);
console.log(myNumber);

if (true) {
    let showMe = "Here I am!";
    console.log(showMe);
}


//Constant
const birthday = "June";
const maximumScore = 30;
//birthday = "July" - It will throw an error


//var - global scope variable
var x = 5;
var y = 10;
if (true) {
    var showMeAgain = "Here I am again";
}
console.log(showMeAgain);



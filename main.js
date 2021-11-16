//Need to link pads and button from the html by selecting them via the queryselector

let start = document.querySelector(".start-btn");
let pads = document.querySelectorAll(".board__pad");

//Click the start button needs to reset the score to zero and start the game

//Need a for loop to iterate through an array of the pads while randomly selecting one and triggering a light/color change, at the same time pushing the selected pad to an empty array.  
//User clicks pads trying to imitate the sequence, each pad clicked will be sent to another empty array which will be compared to the array of random pads in an "if" statement. If the 
//two arrays are equal the for loop repeats the iteration adding another random pad to the sequence. If the arrays are not equal the loop ends and game is over

//Create an array containing the pads
// const boardPads = [pads];

//Create empty arrays one for the randomly selected sequence and one for the user choices
const randomPads = [];
const userPads = [];







//Need to link pads and button from the html by selecting them via the queryselector

let start = document.querySelector(".start-btn");
let pads = document.querySelectorAll(".board__pad");
let pad1 = document.querySelector("#board__pad1");
let pad2 = document.querySelector("#board__pad2");
let pad3 = document.querySelector("#board__pad3");
let pad4 = document.querySelector("#board__pad4");

//Click the start button needs to reset the score to zero and start the game

//Need a for loop to iterate through an array of the pads while randomly selecting one and triggering a light/color change, at the same time pushing the selected pad to an empty array.  
//User clicks pads trying to imitate the sequence, each pad clicked will be sent to another empty array which will be compared to the array of random pads in an "if" statement. If the 
//two arrays are equal the for loop repeats the iteration adding another random pad to the sequence. If the arrays are not equal the loop ends and game is over

//Create an array containing the pads
// const boardPads = [pads];

//Create click events for each pad and push the selection into userPads
const userClick1 = pad1.addEventListener("click", () => {
    const padFlash1 = pad1.style.backgroundColor = "#32df32";
    userPads.push(padFlash1);
})
const userClick2 = pad2.addEventListener("click", () => {
    const padFlash2 = pad2.style.backgroundColor = "#D85E5B";
    userPads.push(padFlash2);
})
const userClick3 = pad3.addEventListener("click", () => {
    const padFlash3 = pad3.style.backgroundColor = "#EBEC77";
    userPads.push(padFlash3);
})
const userClick4 = pad4.addEventListener("click", () => {
    const padFlash4 = pad4.style.backgroundColor = "#32A4EA";
    userPads.push(padFlash4);
})

//Create empty arrays one for the randomly selected sequence and one for the user choices
const randomPads = [];
const userPads = [];

//Create variables to setTimeout to revert the pad color after "flash"
const padTimeOut1 = () => {
    pad1.style.backgroundColor = "#61D48F";
}; 
const padTimeOut2 = () => {
    pad2.style.backgroundColor = "#D85E5B";
}; 
const padTimeOut3 = () => {
    pad3.style.backgroundColor = "#EBEC77";
}; 
const padTimeOut4 = () => {
    pad4.style.backgroundColor = "#32A4EA";
}; 

//create a click event for the start-btn to start the game 
const startGame = start.addEventListener("click", () => {

    while (randomPads === userPads) {
        //Create a variable that picks a random pad from the array and pushes it to the randomPads array
        const random = pads[Math.floor(Math.random() * pads.length)];
        randomPads.push(random);

        //Use forEach on the randomPads array to apply color flash to each item 
        randomPads.forEach((pads) => {
        
            //Create if statement to determine which pad was selected and to flash the correct corresponding color, the setTimeout to revert to original color
            if (pads === pad1) {
                pad1.style.backgroundColor = "#32df32";
                setTimeout(padTimeOut1, 700)
            } else if (pads === pad2) {
                pad2.style.backgroundColor = "#e93f3f";
                setTimeout(padTimeOut2, 700)
            } else if (pads === pad3) {
                pad3.style.backgroundColor = "#fcff52";
                setTimeout(padTimeOut3, 700)
            } else if (pads === pad4) {
                pad4.style.backgroundColor = "#006bff";
                setTimeout(padTimeOut4, 700)
            }
        })

        //Create if statement to deterimine if randomPads and userPads are equal in length
        if (randomPads.length === userPads.length) {
            if (randomPads !== userPads) {
                break
            }
            else
        }

    }
    
})


//dont need a for loop on the "pads" that can be a simple random number generator which sends a new pad to the randomPads array, when the user clicks the correct sequence an
//if statement send back to the random generator adding a new pad to the sequence. Where the for loops come into play is when you want to display the sequence, so the for loop will be 
//for the randomPads






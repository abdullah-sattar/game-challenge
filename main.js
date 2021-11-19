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
    const borderFlash1 = pad1.style.boxShadow = "-2px 5px 50px 10px #a7fba7";
    setTimeout(padTimeOut1, 200);
    userPads.push(pad1);
    compareArrays();
})
const userClick2 = pad2.addEventListener("click", () => {
    const padFlash2 = pad2.style.backgroundColor = "#e93f3f";
    const borderFlash2 = pad2.style.boxShadow = "2px 5px 50px 10px lightcoral";
    setTimeout(padTimeOut2, 200)
    userPads.push(pad2);
    compareArrays();
})
const userClick3 = pad3.addEventListener("click", () => {
    const padFlash3 = pad3.style.backgroundColor = "#fcff52";
    const borderFlash3 = pad3.style.boxShadow = "-2px -5px 50px 10px #c0c168";
    setTimeout(padTimeOut3, 200)
    userPads.push(pad3);
    compareArrays();
})
const userClick4 = pad4.addEventListener("click", () => {
    const padFlash4 = pad4.style.backgroundColor = "#006bff";
    const borderFlash4 = pad4.style.boxShadow = "2px -5px 50px 10px #687ec1";
    setTimeout(padTimeOut4, 200)
    userPads.push(pad4);
    compareArrays();
})

//Create empty arrays one for the randomly selected sequence and one for the user choices
let randomPads = [];
let userPads = [];

//Create variables to setTimeout to revert the pad color after "flash"
const padTimeOut1 = () => {
    pad1.style.backgroundColor = "#61D48F";
    pad1.style.boxShadow = "";
}; 
const padTimeOut2 = () => {
    pad2.style.backgroundColor = "#D85E5B";
    pad2.style.boxShadow = "";
}; 
const padTimeOut3 = () => {
    pad3.style.backgroundColor = "#EBEC77";
    pad3.style.boxShadow = "";
}; 
const padTimeOut4 = () => {
    pad4.style.backgroundColor = "#32A4EA";
    pad4.style.boxShadow = "";
}; 

//create function for the if statment to determine correct color flash
const comparePads = (pad) => {
    if (pad === pad1) {
    pad1.style.backgroundColor = "#32df32";
    pad1.style.boxShadow = "-2px 5px 50px 10px #a7fba7";
    setTimeout(padTimeOut1, 300)
    } else if (pad === pad2) {
    pad2.style.backgroundColor = "#e93f3f";
    pad2.style.boxShadow = "2px 5px 50px 10px lightcoral";
    setTimeout(padTimeOut2, 300)
    } else if (pad === pad3) {
    pad3.style.backgroundColor = "#fcff52";
    pad3.style.boxShadow = "-2px -5px 50px 10px #c0c168";
    setTimeout(padTimeOut3, 300)
    } else if (pad === pad4) {
    pad4.style.backgroundColor = "#006bff";
    pad4.style.boxShadow = "2px -5px 50px 10px #687ec1";
    setTimeout(padTimeOut4, 300)
    }
}

//create a click event for the start-btn to start the game 
// const startGame = start.addEventListener("click", () => {

//     for (let i =0; i <= 20; i++) {
//         //Create a variable that picks a random pad from the array and pushes it to the randomPads array
//         const random = pads[Math.floor(Math.random() * pads.length)];
//         randomPads.push(random);
//         console.log(randomPads)
//         //Use forEach on the randomPads array to apply color flash to each item 
//         randomPads.forEach((pad, i) => {
        
//             //Call the comparePads function and apply a setTimeout to have a time delay between each color flash 
//             setTimeout(() => {
//                 comparePads(pad); 
//             }, i * 1000);

            
//         });

//         //Create if statement to deterimine if randomPads and userPads are equal in length
//         if (randomPads.length === userPads.length) {
//             if (randomPads !== userPads) {
//                 break
//             } else {
//             }
//         }
//     }
    
// })

const playGame = () => {
    const random = pads[Math.floor(Math.random() * pads.length)];
    randomPads.push(random);
    console.log(randomPads)
    randomPads.forEach((pad, i) => {
        
    //Call the comparePads function and apply a setTimeout to have a time delay between each color flash 
    setTimeout(() => {
        comparePads(pad); 
    }, i * 1000);
        
                    
    });
}

//create a function that compares the arrays via an if statement and for loop
const compareArrays = () => { 
    console.log(randomPads, userPads);
    if (randomPads.length !== userPads.length) {
        return
    } else {
        for (let i = 0; i < randomPads.length; i++) {
            console.log(randomPads[i], userPads[i]);
            if (randomPads[i] !== userPads[i]) {
                return;
            }
        }
        setTimeout(() => {
                    playGame();
                }, 1000);
        userPads = [];
    }  
}    


const startGame = start.addEventListener("click", () => {
    randomPads = [];
    userPads = [];
    playGame();
});    
//dont need a for loop on the "pads" that can be a simple random number generator which sends a new pad to the randomPads array, when the user clicks the correct sequence an
//if statement send back to the random generator adding a new pad to the sequence. Where the for loops come into play is when you want to display the sequence, so the for loop will be 
//for the randomPads
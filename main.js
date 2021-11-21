let start = document.querySelector(".start-btn");
let score = document.querySelector(".score");
let gameOver = document.querySelector("h3");
let pads = document.querySelectorAll(".board__pad");
let pad1 = document.querySelector("#board__pad1");
let pad2 = document.querySelector("#board__pad2");
let pad3 = document.querySelector("#board__pad3");
let pad4 = document.querySelector("#board__pad4");

//Create a variable used to increase the score
let increaseScore = 0;

//Create empty arrays one for the randomly selected sequence and one for the user choices
let randomPads = [];
let userPads = [];

//create a click event for the start-btn to start the game 
const startGame = start.addEventListener("click", () => {
    //the "GAME OVER" sign is removed, the score is reset to zero, the randomPads and userPads arrays are cleared, and the playGame function is called
    gameOver.style.display = "none";
    score.innerHTML = `SCORE = ${increaseScore = 0}`;
    randomPads = [];
    userPads = [];
    setTimeout(() => {
        playGame();
    }, 500);
}); 

//create a playGame function which selects a random pad and pushes in into the randomPads array
const playGame = () => {
    const random = pads[Math.floor(Math.random() * pads.length)];
    randomPads.push(random);
    console.log(randomPads)
    //Perform a forEach on the randomPads array 
    randomPads.forEach((pad, i) => {
    //Call the comparePads function on each element and apply a setTimeout to have a time delay between each color flash 
        setTimeout(() => {
            comparePads(pad); 
        }, i * 700);               
    });
}

//create a comparePads function using an if statment to determine which pad is selected in the array and to the display the correct 'color flash' (a change in the background color and 
//box-shadow) and then apply a setTimeout to revert back to the original colour in a specified time
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

//Create functions to setTimeout to revert the pad color after the 'colour flash'
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

//Create click events for each pad, and when clicked trigger a change in background colour and box-shadow colour which is then reverted using a setTimeout. The selected pad is then 
//pushed into userPads and the compareArrays function is called
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

//create a function that compares the arrays via an if statement and for loop
const compareArrays = () => { 
    console.log(randomPads, userPads);
    if (randomPads.length !== userPads.length) {
        //if the arrays are not equal in length i.e. the user has not seleceted the sequence yet then the for loop does not trigger
        return
    } else {
        for (let i = 0; i < randomPads.length; i++) {
            console.log(randomPads[i], userPads[i]);
            if (randomPads[i] !== userPads[i]) {
                //if the arrays are not equal i.e. the user has selected an incorrect sequence then display "GAME OVER" and end the loop
                gameOver.style.display = "block";
                return;
            }
        }
    //if the arrays are equal then the playGame function is called, the userPads array is cleared and the score is increased by one
    setTimeout(() => {
        playGame();
    }, 1000);
    userPads = []; 
    score.innerHTML = `SCORE = ${increaseScore = increaseScore + 1}`
    }  
}  


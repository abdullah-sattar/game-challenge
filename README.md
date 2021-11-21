# Game-challenge: Simon
## Tech Stack
 - HTML
 - CSS
 - SCSS
 - JavaScript

## The Design
The design was created using a mobile-first approach with the goal of having a responsive layout. A flex container was created with four child div elements which were then styled into the shape of coloured pads using border-radius. A combination of h and p elements were used for the text, and a button element was used to start the game.

## The Code
A click event was added to the start button which calls a function that clears the randomPads and userPads arrays, removes the "GAME OVER" text if displayed and then calls the playGame function.

The playGame function randomly pushes one of the pads to the randomPads array and then performs a forEach on the same array. The forEach calls the comparePads funtion on each element in the array with a setTimeout.

The comparePads function uses an if statement to determine the selected pad in the randomPads array and then applies a temporary colour change and box-shadow using a setTimeout to simulate a light flash.

Following this order of events the user clicks on the pads in an attempt to copy the random sequence. Using click events, when the user clicks on a pad a similar function is performed to that of comparePads where a "light flash" occurs and the selected pad is pushed into the userPads array.

The compareArrays function uses an if statement to determine if the randomPads and userPads arrays are equal. If so, the score is increased by one and the original playGame function is called repeating the whole process. If the arrays are not equal (the user selected an incorrect sequence) a "GAME OVER" text is displayed and the sequence breaks.

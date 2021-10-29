//All of the choices a user will make thru each screen of the game.

/* 
Your goal is to create if statements that will print different text endings
To the star wars themed ending screen.  
Use the storyConclusion() functioin below to map out your if statement choices.
Then use the buildFinalScreenText() function to write the result of these decisions.  
*/

let choiceOne = window.localStorage.getItem("choiceOne"); // use me
let choiceTwo = window.localStorage.getItem("choiceTwo");  // use me
let choiceThree = window.localStorage.getItem("choiceThree");  // use me
let choiceFour = window.localStorage.getItem("choiceFour");  // use me

let buildFinalScreenText = (endingText) => {
    document.getElementById("star-wars-ending-scroll-text").innerHTML = endingText;

}

// build your final if statements in the function below

let storyConclusion = () => {
    // write all the results of your different if statements within this function
    }


storyConclusion();
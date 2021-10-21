let welcome = () => {
    console.log(window.location.href);
   window.location.href = "./assets/first-choice/enter.html"
}

let  myHandler = (e) => {
    // What you want to do after the event
    window.location.href = "./firstChoice.html";
}

let placeTextOnFinalScreen = (endingText) => {
    document.getElementById("star-wars-ending-scroll-text").innerHTML = endingText;
}


// First choice decision functions
////////
/* 
Be sure to store all of your outcomes for each choice into its respective variable below.
Each of the functions below will run the moment a user clicks a choice.

*/

let choiceOne;  // use me
let choiceTwo;   // use me
let choiceThree;   // use me
let choiceFour;     // use me

let clickBathroom = () => {
    window.location.href = "../second-choice/second-choice.html";
    return "bathroom";
}

let clickLivingroom = () => {
    window.location.href = "../second-choice/second-choice.html";
    return "living room";
}

let clickBedroom = () => {
    window.location.href = "../second-choice/second-choice.html";
return "bedroom";
}

let clickKitchen = () => {
    window.location.href = "../second-choice/second-choice.html";
    return "kitchen";
}
//////////////////////////////////////////////////////////
// End first choice decision functions
////////////////////////////////////////////////////////////////
////////////////////////////////////////

// Second choice functions
let clickCellPhone = () => {
    window.location.href = "../third-choice/third-choice.html";
    return "cell phone";
}

let clickGreenSkull = () => {
    window.location.href = "../third-choice/third-choice.html";
    return "green skull";
}

let clickGymShorts = () => {
    window.location.href = "../third-choice/third-choice.html";
    return "gym shorts";
}

let clickbreadAndButter = () => {
    window.location.href = "../third-choice/third-choice.html";
    return "bread & butter"
}
/////////////////////////////
// End of second choice functions
/////////////////////////////
let clickTaco = () => {
    window.location.href = "../forth-choice/forth-choice.html";
    return "taco";
}

let clickPizza = () => {
    window.location.href = "../forth-choice/forth-choice.html";
    return "pizza";
}

let clickFrenchFries = () => {
    window.location.href = "../forth-choice/forth-choice.html";
    return "french fries";
}

let clickPeanutButter = () => {
    window.location.href = "../forth-choice/forth-choice.html";
    return "dancing peanut butter";
}
//////////////////////////////////////////////
//////////////////////////////////////////////
// End of third choice functions
//////////////////////////////////////

//////////////////////////////////
// Start of forth choice functions
//////////////////////////////////

let clickGryffindor = () => {
    window.location.href = "../final-screen/final-screen.html";
    placeTextOnFinalScreen("And finally the end have come.  The only thing standing in our way was us... and no one could stop us")
    return "Gryffindor";
}

let clickHufflePuff = () => {
    window.location.href = "../final-screen/final-screen.html";
    return "HufflePuff";
}

let clickRavenClaw = () => {
    window.location.href = "../final-screen/final-screen.html";
    return "Gryffindor";
}

let clickSlytherin = () => {
    window.location.href = "../final-screen/final-screen.html";
    return "Slytherin";
}

// end of forth choice functions


///////////////////////////////////////
/////////////////////////////////////
////////////////////////////
// misc helper functions essential for game

/////////////////////////////////
//////////////////
//////////////  
document.getElementById('doorOpen').addEventListener('ended',myHandler,false);
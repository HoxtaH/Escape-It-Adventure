
   let welcome = () => {
    console.log(window.location.href);
    window.location.href = "./assets/first-choice/enter.html"
}



// First choice decision functions
////////
/* 
Be sure to store all of your outcomes for each choice into its respective variable below.
Each of the functions below will run the moment a user clicks a choice.

*/



let clickBathroom = () => {
    window.localStorage.setItem("choiceOne", "bathroom");
    window.location.href = "../second-choice/second-choice.html";
    return "bathroom";
}

let clickLivingroom = () => {
    window.localStorage.setItem("choiceOne", "living room");
    window.location.href = "../second-choice/second-choice.html";
    return "living room";
}

let clickBedroom = () => {
    window.localStorage.setItem("choiceOne", "bedroom");
    window.location.href = "../second-choice/second-choice.html";
return "bedroom";
}

let clickKitchen = () => {
    window.localStorage.setItem("choiceOne", "kitchen");
    window.location.href = "../second-choice/second-choice.html";
    return "kitchen";
}
//////////////////////////////////////////////////////////
// End first choice decision functions
////////////////////////////////////////////////////////////////
////////////////////////////////////////

// Second choice functions
let clickCellPhone = () => {
    window.localStorage.setItem("choiceTwo", "cell phone");
    window.location.href = "../third-choice/third-choice.html";
    return "cell phone";
}

let clickGreenSkull = () => {
    window.localStorage.setItem("choiceTwo", "green skull");
    window.location.href = "../third-choice/third-choice.html";
    return "green skull";
}

let clickGymShorts = () => {
    window.localStorage.setItem("choiceTwo", "gym shorts");
    window.location.href = "../third-choice/third-choice.html";
    return "gym shorts";
}

let clickbreadAndButter = () => {
    window.localStorage.setItem("choiceTwo", "bread & butter");
    window.location.href = "../third-choice/third-choice.html";
    return "bread & butter"
}
/////////////////////////////
// End of second choice functions
/////////////////////////////
let clickTaco = () => {
    window.localStorage.setItem("choiceThree", "taco");
    window.location.href = "../forth-choice/forth-choice.html";
    return "taco";
}

let clickPizza = () => {
    window.localStorage.setItem("choiceThree", "pizza");
    window.location.href = "../forth-choice/forth-choice.html";
    return "pizza";
}

let clickFrenchFries = () => {
    window.localStorage.setItem("choiceThree", "french fries");
    window.location.href = "../forth-choice/forth-choice.html";
    return "french fries";
}

let clickPeanutButter = () => {
    window.localStorage.setItem("choiceThree", "dancing peanut butter");
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
    window.localStorage.setItem("choiceFour", "Gryffindor");    
    window.location.href = "../final-screen/final-screen.html";
   
    return "Gryffindor";
}

let clickHufflePuff = () => {
    window.localStorage.setItem("choiceFour", "HufflePuff");
    window.location.href = "../final-screen/final-screen.html";
    return "HufflePuff";
}

let clickRavenClaw = () => {
    window.localStorage.setItem("choiceFour", "Raven Claw");
    window.location.href = "../final-screen/final-screen.html";
    return "Raven Claw";
}

let clickSlytherin = () => {
    window.localStorage.setItem("choiceFour", "Slytherin");
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


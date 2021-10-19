let welcome = () => {
    console.log(window.location.href);
   window.location.href = "./assets/first-choice/enter.html"
}

let  myHandler = (e) => {
    // What you want to do after the event
    window.location.href = "./firstChoice.html"
}


// First choice decision functions
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
// End first choice decision functions

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
// End of second choice functions

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


// End of third choice functions

// Start of forth choice functions

let clickGryffindor = () => {
    window.location.href = "../final-screen/final-screen.html";
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



document.getElementById('doorOpen').addEventListener('ended',myHandler,false);
  
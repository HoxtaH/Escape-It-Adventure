let welcome = () => {
    console.log(window.location.href);
   window.location.href = "./assets/video-pages/enter.html"
}

let  myHandler = (e) => {
    // What you want to do after the event
    window.location.href = "./firstChoice.html"
}

document.getElementById('doorOpen').addEventListener('ended',myHandler,false);
  
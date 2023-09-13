(function () {
    'use strict';
   const theButton = document.querySelector("#theButton")
   const theBody = document.getElementsByTagName("body")
   theButton.addEventListener("click",event)
   let loop  = false
   
   function event (){
    if (!loop){
        theButton.innerText  = "Stop Changing Colors"
        loop  = true
        continueLoop()
    }
    else{
        theButton.innerText  = "Continue Changing Colors"
        loop  = false
    }
   }

   function startLooping() {
    if (!loop) {
        loop = true;
        console.log("hello");
        continueLoop(); // Call the continueLoop function to start the loop
    }
}

function continueLoop() {
    if (loop) {
        document.body.style.backgroundColor = getRandomRgb();
        theButton.style.backgroundColor = getRandomRgb();
        console.log("in the loop");
        setTimeout(() => {
            continueLoop();
        }, 1000);
    }
}

   function getRandomRgb() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  } 

}());    
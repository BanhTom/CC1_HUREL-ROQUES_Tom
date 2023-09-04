"use strict";

// Exercice 1:

const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");

let secretNumber = 0;
let nbGuesses = 0;
let maxGuesses = 0;

function launchGame(_evt) {
  secretNumber = Math.floor(Math.random() * $maxUsr.value) + 1;
  $guessBtn.removeAttribute("disabled");
  $output.textContent = "";

  function verifie(evt) {
    const userGuess = parseInt($numUsr.value);
    if (userGuess == secretNumber) {
      $output.textContent = "C'est gagné !";
      $guessBtn.disabled = true;
    } else if (userGuess > secretNumber) {
      $output.textContent = "Nombre trop élevé.";
    } else if (userGuess < secretNumber) {
      $output.textContent = "Nombre trop bas.";
    }
  }

  $guessBtn.addEventListener("click", verifie);
  $numUsr.addEventListener("keypress", function(evt){
    if ($guessBtn.disabled == false) {
      if (evt.key === "Enter") {
        verifie();
      }
    }
  });
}

$startBtn.addEventListener("click", launchGame);



// Exercice 2:

function addCow(evt) {
  console.debug(evt.x, evt.y);
  const image = document.createElement("img");
  image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/3/30/Cowicon.svg");
  image.style.left = evt.clientX + window.scrollX + "px";
  image.style.top = evt.clientY + window.scrollY + "px";
  const rotation = Math.floor(Math.random() * 360);
  image.style.transform = `rotate(${rotation}deg)`;
  image.classList.add("cow");
  document.body.appendChild(image);
}

function toggleCow(_evt) {
  if (document.onmousedown instanceof Function) {
    document.onmousedown = null;
  } else {
    document.onmousedown = addCow;
  }
}


$cowBtn.addEventListener("click", toggleCow);


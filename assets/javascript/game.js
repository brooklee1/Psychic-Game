var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var userGuess = "";

var computerGuess = "";

var wins = 0;

var losses = 0;

var guessesSoFar = [];

var guessLeft = 10;

var winsSpan = document.getElementById("wins");

var lossesSpan = document.getElementById("losses");

var guessLeftSpan = document.getElementById("guessLeft");

var guessesSoFarSpan = document.getElementById("guessesSoFar");

winsSpan.innerText = wins;

lossesSpan.innerText = losses;

guessLeftSpan.innerText = guessLeft;

guessesSoFarSpan.innterText = guessesSoFar;

console.log(userGuess);

document.onkeyup = function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    guessesSoFar.push(userGuess);
    console.log(guessesSoFar)

    if (userGuess === computerGuess) {
        wins++;
        alert("You chose wisley");
        guessLeft = 10;
        guessesSoFar.length = 0; 
    }
    
    else if (guessLeft === 0) {
        losses++;
        alert("You chose poorly"); 
        guessLeft = 9;
        guessesSoFar.length = 0;
    
    }
    
    else if (userGuess !== computerGuess) {
        guessLeft--;
    }
    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar.join(" ");

} 
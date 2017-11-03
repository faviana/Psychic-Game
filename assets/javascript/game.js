//create an array of the alphabet
var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//define my variables
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guessesMade = "";

//start a function when player presses a key
document.onkeyup = function(event) {

    //determine the key that player pressed
    var player = event.key;

    //computer chooses a random letter
    var computer = alphabet[Math.floor(Math.random() * alphabet.length)];

    //if statements
    if (player === computer){
        wins++;
        confirm("You Won!!!" + userName + "Play again?");
    }
    else{
        guessesLeft--;
    }

    if (guessesLeft === 0){
        losses++;
        confirm("You Lost. I Guessed: " + computer + " Play again?");
    }

    //show score
    var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>"+
    "<p>Guesses Made: " + computer + "</p>";


    document.getElementById("game").innerHTML = html;

}

//create an array of the alphabet
var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//define my variables
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guessesMade = [];

//start a function when user presses a key
document.onkeyup = function(event) {

    //determine/store the key that user pressed
    var user = event.key;

    //add guessed letter to the array guessesMade
    guessesMade.push(user);

    //computer chooses a random letter
    var computer = alphabet[Math.floor(Math.random() * alphabet.length)];

    //if statement: If the guess of the user equals the computer letter
    if (user === computer){
        //user wins
        wins++;
        alert("You Won!!! ... I guessed: "+computer);
        confirm("Play again?");
        //guessesLeft restarts to 15 guesses
        guessesLeft = 15;
    }
    else{
        //else, guessesLeft count reduces 1 value; game continues
        guessesLeft--;

    }

    //if statement: If the guessesLeft count equals zero
    if (guessesLeft === 0){
        //user losses
        losses++;
        alert("You Lost. I Guessed: "+computer)
        confirm("Play again?");
        //guessesLeft restarts to 15 guesses
        guessesLeft = 15;
        
    }

    //show score
    var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>"+
    "<p>Guesses Made: " + computer + "</p>";

    document.getElementById("game").innerHTML = html;
  
}

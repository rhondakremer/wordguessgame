$(document).ready(function() {

//array of words to guess
var wordBank = ["apple", "banana", "grapes", "starfruit", "pineapple", "jackfruit", "avocado", "watermelon"];
//number of guesses left
var guessesLeft = 15;
//random displayed as _
var inputArray = [];
var wins = 0;
var losses = 0;
// stores letters guessed
var guessedLetters = [];
//pick random word from workBank array
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//splits randomWord
var wordAsArray = randomWord.split('');
var remainingLetters = randomWord.length;

function restart() {
    guessesLeft = 15;
    inputArray = [];
    guessedLetters = [];
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    wordAsArray = randomWord.split('');
    remainingLetters = randomWord.length;
    $("#currentWord").empty();
    $("#incorrect").empty();
    console.log(randomWord);
    
    for (let i = 0; i < randomWord.length; i++) {
        inputArray[i] = "_ ";
        $("#currentWord").append("<span>"+inputArray[i]+"</span>");
    }
}


//console.log(wordAsArray);
console.log(randomWord);

//display word on screen as underscores
for (let i = 0; i < randomWord.length; i++) {
    inputArray[i] = "_ ";
    $("#currentWord").append("<span>"+inputArray[i]+"</span>");
}


//record character inputted from user
document.addEventListener('keydown', function(event) {
    var letter = event.key.toLowerCase();
    guessedLetters.push(letter);
    document.getElementById("incorrect").innerHTML = guessedLetters.join("");
    guessesLeft--;
    $("#guessesLeft").html("<span>" + guessesLeft + "</span>");
    if (guessesLeft == 0) 
    {
        alert('you suck!');
        losses++;
        $("#losses").html("<span>" + losses + "</span>");
    } 

// Reveals letter if found in word
for (let i = 0; i < randomWord.length; i++) {
    if (letter == wordAsArray[i]) {

        inputArray[i] = letter;
        document.getElementById("currentWord").innerHTML = inputArray.join("");
        var renderedWord = document.getElementById("currentWord").innerHTML;

		if(renderedWord.indexOf("_") === -1) {
            wordComplete = true;

            if (wordComplete = true) {
                alert("Yummy, " + randomWord);
                wins++;
                $("#wins").html("<span>" + wins + "</span>");
                restart();
            }
        }
       
        }
    }


    }



//var reset = function () {}


//do not accept character that has already been guessed


//when 1 is added to wins, generate new word and reset letters guessed */

)});
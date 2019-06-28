$(document).ready(function() {


var wordBank = ["apple", "banana", "grapes", "starfruit", "pineapple", "jackfruit", "avocado"];//array of words to guess
var guessesLeft = 10;//number of guesses left
//inputArray = user's guess
var inputArray = [];//random displayed as _
var wins = 0;//# of wins
var losses = 0;//# of losses
var guessedLetters = [];
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];//pick random word from workBank array
var wordAsArray = randomWord.split('');//splits randomWord

console.log(wordAsArray);
console.log(randomWord);
//display word on screen as underscores
for (let i = 0; i < randomWord.length; i++) {
    inputArray[i] = "_ ";
    $("#currentWord").append("<span>"+inputArray[i]+"</span>")
}

//var updateGuessesLeft = function () {
 //    document.querySelector('#guessesLeft').innerHTML = guessesLeft;
//}

//var updateGuessesSoFar = function () {
    document.querySelector('#guessesSoFar').innerHTML = guessedLetters.join(', ');
//}

//var updateLetterToGuess;



//record character inputted from user

document.addEventListener('keydown', function(event) {
    console.log(event.key);
    //guessesLeft--;
    //console.log(guessesLeft);
    var letter = event.key.toLowerCase();
    //updateGuessesLeft();
    //updateGuessesSoFar();
    //IF it matches, reveal letter
    for (let i = 0; i < randomWord.length; i++) {
        if (letter == wordAsArray[i]) {
            inputArray[i] = letter;
            document.getElementById("currentWord").innerHTML = inputArray.join("");
        }
        
    }
    /*
        //wins++;
       // document.querySelector('#wins').innerHTML = wins;
        document.querySelector('#currentWord').innerHTML = letter;
        //where this is TRUE, print out the leter. The letter is the input.So it's where the input = letter in random word
        //reset();
    };*/



    }
)

//check if character inputted matches any from word for (if char equals)





var reset = function () {}

//var win  function (){};
//var losses 

//ELSE add letter to guessed column and subtract one from guesses remaining

//do not accept character that has already been guessed

//when all letters are guessed, add 1 to wins total

//when 1 is added to wins, generate new word and reset letters guessed */

});
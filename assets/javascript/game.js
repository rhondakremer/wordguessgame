$(document).ready(function() {

//array of words to guess
var wordBank = ["apple", "banana", "grapes", "starfruit", "pineapple", "jackfruit", "avocado", "watermelon", "strawberry"];
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
wordComplete = false;
alphabet = [];

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
    if((guessedLetters.includes(letter) == false) && (wordComplete == false))
    {
    guessedLetters.push(letter);
    guessesLeft--;
    }

    //guessedLetters.push(letter);
    document.getElementById("incorrect").innerHTML = guessedLetters.join("");
    
    $("#guessesLeft").html("<span>" + guessesLeft + "</span>");
    if (guessesLeft == 0) 
    {
        losses++;
        $("#losses").html("<span>" + losses + "</span>");
        $("#youwin").html("<span>" + "YOU LOSE!!!!" + "</span>");
    } 
    

// Reveals letter if found in word
for (let i = 0; i < randomWord.length; i++) {
    if (letter == wordAsArray[i]) {

        inputArray[i] = letter;
        document.getElementById("currentWord").innerHTML = inputArray.join("");
        var renderedWord = document.getElementById("currentWord").innerHTML;

		if(renderedWord.indexOf("_") === -1) {
            wordComplete = true;

            if (wordComplete == true & (guessesLeft > -1)){
                wins++;
                $("#wins").html("<span>" + wins + "</span>");
                $("#youwin").html("<span>" + "YOU WIN!!!!" + "</span>");
                
            } 
            
        }
        
        }
        
    }

    function restart() {
    
        inputArray = [];
        guessedLetters = [];
        randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        wordAsArray = randomWord.split('');
        remainingLetters = randomWord.length;
        guessesLeft = 15;
        $("#incorrect").html("<span>" + "-" + "</span>");
        $("#guessesLeft").html("<span>" + guessesLeft + "</span>");
        $("#currentWord").empty();
        $("#youwin").empty();
        wordComplete = false;
        
        
        for (let i = 0; i < randomWord.length; i++) {
            inputArray[i] = "_ ";
            $("#currentWord").append("<span>"+inputArray[i]+"</span>");
            console.log(wordAsArray);
        }
    }

    $("#restart").click(function(){
        restart();
      });
      

    })







//do not accept character that has already been guessed


//when 1 is added to wins, generate new word and reset letters guessed */


});
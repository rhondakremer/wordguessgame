$(document).ready(function() {

    // create an array of words
    var wordBank = ["apple", "banana", "grapes", "starfruit", "pineapple", "jackfruit", "avocado"];
    
    //set number of guesses
    var guessesLeft = 10;
    //inputArray = user's guess
    var inputArray = [];
    var wins = 0;
    var losses = 0;
    var guessedLetters = [];
    
    //pick a word from array
    var rand = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(rand);
    
    //record character inputted from user (why doesn't this work after next step?)
    
    //display word on screen as underscores
    for (let i = 0; i < rand.length; i++) {
        inputArray[i] = "_ ";
        $("#currentWord").append("<span>"+inputArray[i]+"</span>")
    }
    
    var updateGuessesLeft = function () {
         document.querySelector('#currentWord').innerHTML = guessesLeft;
    }
    
    var updateGuessesSoFar = function () {
        //user guesses displayed as letters
        document.querySelector('#guesses-so-far').innerHTML = guessedLetters.join(', ');
    }
    
    var updateLetterToGuess;
    
    document.addEventListener('keydown', function(event) {
        console.log(event.key);
        guessesLeft--;
        console.log(guessesLeft);
        var letter = event.key.toLowerCase();
        inputArray.push(letter);
        updateGuessesLeft();
        updateGuessesSoFar();
        //IF it matches, reveal letter
        var match = rand.includes(letter);
    
    
        console.log(match);
        //checking if there's a match between user Input and randomly selected word
        //.includes() will check if it 'includes in a function above
        if (match == true ) {
            wins++;
            document.querySelector('#wins').innerHTML = wins;
            document.query('#___').innerHTML
            //where this is TRUE, print out the leter. The letter is the input.So it's where the input = letter in random word
            reset();
        };
    
    
    
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



    //var updateGuessesLeft = function () {
 //    document.querySelector('#guessesLeft').innerHTML = guessesLeft;
//}

//var updateGuessesSoFar = function () {
    document.querySelector('#guessesSoFar').innerHTML = guessedLetters.join(', ');
//}

//var updateLetterToGuess;



//record character inputted from user


console.log(inputArray);
    console.log(match);
    //checking if there's a match between user Input and randomly selected word
    //.includes() will check if it 'includes in a function above
    if (match == true ) {
        for (let index = 0; index < rand.length; index++) {
            inputArray[index] = letter;
            
        }
        wins++;
        document.querySelector('#wins').innerHTML = wins;
        //document.query('#___').innerHTML;
        //where this is TRUE, print out the leter. The letter is the input.So it's where the input = letter in random word
        reset();
    };



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
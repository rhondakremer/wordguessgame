$(document).ready(function () {

    // array of words to guess
    const wordBank = ["apple", "banana", "grapes", "starfruit", "pineapple", "jackfruit", "avocado", "watermelon", "strawberry", "blueberry", "cantaloupe", "cherry", "guava", "raspberry"];

    // Declare variable
    let randomWord;
    let wordAsArray;
    let guessesLeft;
    let underscoresArray = []; // random word displayed as _
    let guessedLetters = [];
    let wordComplete;
    let wins = 0;
    let losses = 0;

    // Functions
    //display word on screen as underscores
    function initializeGame() {
        randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        wordAsArray = randomWord.split('');
        guessesLeft = 7;
        underscoresArray = [];
        guessedLetters = [];
        wordComplete = false;
        $("#incorrect").html("<span>" + "-" + "</span>");
        $("#guessesLeft").html("<span>" + guessesLeft + "</span>");
        $("#currentWord").empty();
        $("#result").empty();
        wordToUnderscores();
        // console.log(randomWord);
    }

    function wordToUnderscores() {
        for (let i = 0; i < wordAsArray.length; i++) {
            underscoresArray[i] = "_ ";
            $("#currentWord").append("<span>" + underscoresArray[i] + "</span>");
        }
    }

    // Reveals letter if found in word
    function isLetterInWord(letter) {
        for (let i = 0; i < wordAsArray.length; i++) {
            if (letter === wordAsArray[i]) {
                underscoresArray[i] = letter
                document.getElementById("currentWord").innerHTML = underscoresArray.join(" ");
            }
            else if (!guessedLetters.includes(letter) && !wordComplete && (event.which >= 65) && event.which <= 90 && !wordAsArray.includes(letter)) {
                guessedLetters.push(letter);
                guessesLeft--;
            }
        }
        isWordComplete() 
    }

    function isWordComplete() {
        var renderedWord = document.getElementById("currentWord").innerHTML;
        if (renderedWord.indexOf("_") === -1 && guessesLeft > -1) {
            wins++;
            $("#wins").html("<span>" + wins + "</span>");
            $("#result").html("<span>" + "YOU WIN!!!!" + "</span>");
        }
        else if (guessesLeft === 0 && wordComplete == false) {
            losses++;
            $("#losses").html("<span>" + losses + "</span>");
            $("#result").html("<span>" + "YOU LOSE!!!!" + "</span>");
        }
    }


    // Event Listeners
    // listen to character inputted from user
    document.addEventListener('keydown', function (event) {
        if (wordComplete == true) {
            return;
        }
        var letter = event.key.toLowerCase();
        isLetterInWord(letter)
        document.getElementById("incorrect").innerHTML = guessedLetters.join(" ");
        $("#guessesLeft").html("<span>" + guessesLeft + "</span>");
    }) 

    // restart button click listener 
    $("#restart").click(function () {
        initializeGame();
    });

    // start game
    initializeGame()
});
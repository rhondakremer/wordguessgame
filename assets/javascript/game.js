$(document).ready(function () {

    // array of words to guess
    const wordBank = ["Dale Clevenger", "Dennis Brain", "Aubrey Brain", "Barry Tuckwell", "Sarah Willis", "Amber Dean", "Radek Baborak", "Radovan Vlatkovic", "Froydis Ree Wekre"];
    const hangmanParts = ["head", "body", "left-arm", "right-arm", "left-leg", "right-leg", "french-horn"]
    // Declare variables
    let randomWord;
    let wordAsArray;
    let guessesLeft;
    let hangmanPartsIndex = 0;
    let underscoresArray = []; // random word displayed as _
    let guessedLetters = [];
    let wordComplete;
    let wins = 0;
    let losses = 0;

    // Functions
    //display word on screen as underscores
    function initializeGame() {
        randomWord = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
        wordAsArray = randomWord.split('');
        guessesLeft = 7;
        underscoresArray = [];
        guessedLetters = [];
        hangmanPartsIndex = 0;
        wordComplete = false;
        $("#incorrect").html("<span>" + "-" + "</span>");
        $("#guessesLeft").html("<span>" + guessesLeft + "</span>");
        $("#currentWord").empty();
        $("#result").empty();
        wordToUnderscores();
        hideHangman();
        console.log(randomWord);
        console.log(wordAsArray)
    }

    function wordToUnderscores() {
        for (let i = 0; i < wordAsArray.length; i++) {
            if (wordAsArray[i] !== " ") {
                underscoresArray[i] = "_"; 
            }
            else {
                underscoresArray[i] = wordAsArray[i]
            }
            $("#currentWord").append("<span>" + underscoresArray[i] + "</span>");
        }
    }

    // Reveals letter if found in word
    function isLetterInWord(letter) {
        if (guessesLeft > 0) {
            for (let i = 0; i < wordAsArray.length; i++) {
                if (letter === wordAsArray[i]) {
                    underscoresArray[i] = letter
                    document.getElementById("currentWord").innerHTML = underscoresArray.join("");
                }
                else if (!guessedLetters.includes(letter) && !wordComplete && (event.which >= 65) && event.which <= 90 && !wordAsArray.includes(letter)) {
                    guessedLetters.push(letter);
                    guessesLeft--;
                    document.getElementById(hangmanParts[hangmanPartsIndex]).style.visibility = "visible";
                    hangmanPartsIndex++;
                }
            }
            isWordComplete() 
        }
    }

    function isWordComplete() {
        let renderedWord = document.getElementById("currentWord").innerHTML;
        if (renderedWord.indexOf("_") === -1 && guessesLeft > -1) {
            wins++;
            $("#wins").html("<span>" + wins + "</span>");
            $("#result").html("<span>" + "YOU WIN!!!!" + "</span>");
        }
        else if (guessesLeft === 0 && wordComplete == false) {
            losses++;
            $("#losses").html("<span>" + losses + "</span>");
            $("#result").html("<span>" + "YOU LOSE!!!!" + "</span>");
            return;
        }
    }

    function hideHangman() {
        for (let i = 0; i < hangmanParts.length; i++) {
            document.getElementById(hangmanParts[i]).style.visibility = "hidden";
        }
    }


    // Event Listeners
    // listen to character inputted from user
    document.addEventListener('keydown', function (event) {
        if (wordComplete == true) {
            return;
        }
        let letter = event.key.toLowerCase();
        isLetterInWord(letter)
        document.getElementById("incorrect").innerHTML = guessedLetters.join("");
        $("#guessesLeft").html("<span>" + guessesLeft + "</span>");
    }) 

    // restart button click listener 
    $("#restart").click(function () {
        initializeGame();
    });

    // start game
    initializeGame()
});
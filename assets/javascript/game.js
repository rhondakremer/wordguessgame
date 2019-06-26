// create an array of words
var wordBank = ["apple", "banana", "grapes", "starfruit", "pineapple", "jackfruit", "avocado"];

//set number of guesses
var guesses = 26;

//pick a word from array
var rand = wordBank[(Math.random() * wordBank.length) | 0]
console.log(rand);

//display word as underscores
var rand;
var wordLength = rand.length;
var underscores = "";
for(i=0; i<wordLength; i++) {
    underscores = underscores + "_ "
}
document.write(underscores);

//record character inputted from user
var keyPress;
document.addEventListener('keydown', function(event) {
    console.log(event.key);
    }
)

//check if character inputted matches any from word



//IF it matches, reveal letter
//ELSE add letter to guessed column and subtract one from guesses remaining
//do not accept character that has already been guessed
//when all letters are guessed, add 1 to wins total
//when 1 is added to wins, generate new word and reset letters guessed
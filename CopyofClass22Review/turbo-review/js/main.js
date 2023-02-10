// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = 'water'
favDrink = favDrink.trim()
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let words = 'hello goodbye thank you'
if(words.search('apple') !== -1 ) {
    console.log('yes');
}else{
    console.log('no')
}


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let shoot = Math.random()
    if(shoot < 1/3){
        return 'rock'
    }else if(shoot < 2/3){
        return 'paper'
    }else{
        return 'scissors'
    }
}
console.log(rockPaperScissors())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function game(choice){
    let botChoice = rockPaperScissors()
    if( (choice === 'rock' && botChoice === 'scissors' ) || (choice === 'paper' && botChoice === 'rock' ) || (choice === 'scissors' && botChoice === 'paper' )) {
        console.log('You Win')
    }else if(choice === botChoice){
        console.log('You Tie')
    }else{
        console.log('You Lose')
    }
}
game('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr){
    arr.forEach(choice => game(choice));
}
playGameXTimes(['rock', 'paper', 'scissors'])
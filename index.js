let userInput = prompt("Enter a number between 1 and 10");

let randomNum = Math.floor((Math.random() * 10) + 1);

if(userInput === randomNum){
    alert("You guessed right!");
} else {
    alert("guess again loser")
}

alert(randomNum);
alert(userInput);
/**
 * GUESSING GAME:
 *
 * Created By: Lindsay Hampton
 * Date: 
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

    var theNum = Math.floor(Math.random()*10+1);
    console.log(theNum);

    var button = document.querySelector("button");
    var output = document.querySelector("#output");
    var output2 = document.querySelector("#output2");
    var input = document.getElementById('input');
    var guesses = [];

    var myFunction = function(){

        if (input.value === ""){
            output.innerHTML = "The input was invalid.";
            output2.innerHTML = " ";
            alert("Please do not leave the input blank.");
        } else if (isNaN(input.value) || input.value > 10 || input.value < 1) {
            output.innerHTML = "The input was invalid.";
            output2.innerHTML = " ";
            alert("Please only use numbers between 1 and 10.");
        }  else if (input.value == guesses[0] || input.value == guesses[1]) {
            output.innerHTML = "You have already guessed "+input.value+"!";
            output2.innerHTML = "Please try another number!";
            alert("You have already guessed this number!");
        } else {
            output.innerHTML = "You guessed " + input.value + ".";
            console.log(input.value);

            if (input.value == theNum){
                output2.innerHTML = "Your guess was correct! You win! <br> The correct number was "+theNum+"!";
                button.innerHTML = "You win!";
                button.removeEventListener("click", myFunction);
            } else if (input.value > theNum){
                output2.innerHTML = "Your guess was too high, please try again!";
            } else if (input.value < theNum){
                output2.innerHTML = "Your guess was too low, please try again!";
            }

            guesses.push(input.value);

            if (guesses.length >= 3 && input.value != theNum){
                output.innerHTML = "You have made 3 incorrect guesses!<br> GAME OVER!";
                output2.innerHTML = "You guessed "+guesses[0]+", "+guesses[1]+", and "+guesses[2]+", but the correct answer was "+theNum+"!";
                button.innerHTML = "Game Over!";
                button.removeEventListener("click", myFunction);
            }
        }

    };

    button.addEventListener("click", myFunction);

})();
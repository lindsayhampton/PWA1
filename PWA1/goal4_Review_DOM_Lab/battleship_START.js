

	/********************************** BATTLESHIP! ***********************************
	Complete the following code and display results using DOM (results should show in
	the HTML file; Use "The Duel" as reference if needed). Every "ALERT" below should
	be replaced by DOM manipulation.
	
	The board is 7 spaces long (zero counts as a space) and a ship is 3 spaces long
	User can pick a number between 0-6 and try to hit the ship
	If the user hits the ship, they are alerted. They have to "hit" all three spaces 
	occupied by the ship to "SINK" the battleship.
	Once the ship is sunk, they win and are alerted to how many guesses it took so
	SINK THE BATTLESHIP!
	
	EXTRA CREDIT: Use an Object Literal for the locations rather than separate vars
	**********************************************************************************/
	
	
//CREATE VAR's for 3 LOCATIONS ON THE BOARD

//var myShip = {first: 2,second: 3,third: 4};

    var randomLoc = Math.floor(Math.random()*5);
    var first = randomLoc;
    var second = first+1;
    var third = second+1;

//CREATE VARIABLES FOR INITIAL GUESS, HITS, & GUESSES (TALLY SHOULD START AT 0)

    var guess;
    var hits = 0;
    var guessNum = 0;

//CREATE VARIABLE TO DETERMINE IF SUNK IS TRUE OR FALSE (INITIATE AS FALSE)

    var sunk = false;

//CREATE A WHILE LOOP THAT WILL RUN UNTIL THE SHIP IS SUNK

while (sunk == false){
    guess = prompt("An enemy battleship has been spotted!\nShoot it with a number from 0-6!");
    if (guess < 0 || guess > 6 || isNaN(guess)){
        prompt("Please enter a valid cell number!");
    } else {
        guessNum = guesses+1;
        if (guess == first || guess == second || guess == third) {
            alert("SUCCESS, IT'S A HIT!");
            hits = hits + 1;
        }if (hits == 3) {
                sunk = true;
                alert("The enemy Battleship has been sunk, congratulations!");
            } else {
            alert("Unfortunately, it was a MISS!");
        }
    }
}
    var gameOver = "You guessed "+guessNum+" times before you sank the Battleship, which means your shooting accuracy was "+(3/guessNum)+"!";
	//PROMPT USER TO GUESS A NUMBER ON THE BOARD (0-6)
	
	
	
	//CREATE A CONDITIONAL STATEMENT TO VALIDATE THE USER'S GUESS
	//IS THE GUESS BETWEEN 0 AND 6?
	
	
	
	//INSIDE OF THE ELSE STATEMENT, TALLY GUESSES FOR EACH ATTEMPT
	
	
	
		//USE A NESTED CONDITIONAL INSIDE OF THE ELSE STATEMENT
		//IF THE USER'S GUESS MATCHES ANY OF THE SHIPS OCCUPIED SPACES, ALERT "HIT"
	
	
	
			//TALLY HITS BY ADDING ONE EACH TIME THE LOOP RUNS
			
			
			
			//CONDITION - IF USER REACHES 3 HITS, THEN THE SHIP IS SUNK
		
		
		
			//ELSE ALERT MISS!	
			
			
//CREATE VAR AND ALERT FOR STATS (YOU TOOK ? GUESSES TO SINK THE BATTLESHIP)



			////////////// ON YOUR OWN ///////////////////

// 	Try to replace location 1 with a random location
// 	USE: var randomLoc = Math.floor(Math.random() * 5); FOR YOUR FIRST VAR



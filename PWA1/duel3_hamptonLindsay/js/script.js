/*
 Lindsay Hampton
 May 10, 2015
 PWA 1
 Duel 1
 */

//alert("Testing 1, 2, 3...");

// Array
//var player1 = ["Sabre Tooth Tiger", 20, 100];
//var player2 = ["A Bowl of Jello", 15, 100];

/* Players
var p1 = "Sabre Tooth Tiger";
var p2 = "A Bowl of Jello";

// Damage
var oneDamage = 20;
var twoDamage = 15;

// Health
var oneHealth = 100;
var twoHealth = 100;

 */

// Players (Round 3)
var player1 = {name: "Sabre Tooth Tiger", damage: 20, health: 100};
var player2 = {name: "A Bowl of Jello", damage: 15, health: 100};

var min1 = player1.damage * .5;
var min2 = player2.damage * .5;


// Round
var round = 0;

/* fight();

function fight(){
   // alert(player1[0]+": "+player1[2]+" vs. "+player2[0]+": "+player2[2]);
   // alert("FIGHT!!!");

    for (var i=0; i < 10; i++){
        var f1 = Math.floor(Math.random()*(player1.damage-min1)+min1);
        var f2 = Math.floor(Math.random()*(player2.damage-min2)+min2);

        player1.health-=f1;
        player2.health-=f2;

        console.log(player1.name+": "+player1.health+" vs. "+player2.name+": "+player2.health);

        var result = winnerCheck();
        console.log(result);
        if (result==="none")
        {
            round++;
           // alert(player1[0]+":"+player1[2]+"  *ROUND "+round+" OVER"+"*  "+player2[0]+":"+player2[2]);

        } else {
           // alert(result);
            break;
        }
    }

} */

function winnerCheck(){
    var result = "START NEXT ROUND!";
    if (player1.health<1 && player2.health<1){
        result = "IT'S A DRAW!";
        button.removeEventListener("click", fight);
    } else if(player1.health<1){
        result =player2.name+" WINS!!!"
        button.removeEventListener("click", fight);
    } else if (player2.health<1){
        result = player1.name+" WINS!!!"
        button.removeEventListener("click", fight);
    }
    return result;
}


var output = document.querySelector("#round_number");
var button = document.querySelector(".buttonblue");
var score1 = document.querySelector("#kabal");
var score2 = document.querySelector("#kratos");

function fight(){

    var f1 = Math.floor(Math.random()*(player1.damage-min1)+min1);
    var f2 = Math.floor(Math.random()*(player2.damage-min2)+min2);

    player1.health-=f1;
    score1.innerHTML = player1.health;
    player2.health-=f2;
    score2.innerHTML = player2.health;


    var winner = winnerCheck();

    console.log(player1.name+": "+player1.health+" vs. "+player2.name+": "+player2.health);
    output.innerHTML = player1.name+": "+player1.health+"<br> vs. <br>"+player2.name+": "+player2.health+"<br>"+winner;

}

button.addEventListener("click", fight);

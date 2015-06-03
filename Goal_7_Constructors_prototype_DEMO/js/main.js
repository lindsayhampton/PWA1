// Create a constructor function for a dog
// A constructor starts with a capital letter (Dog)
// A constructor is a set of blueprints / wireframe for an object

// Anonymous constructor function
// var Dog = function(){};

var dogNames = ["Spot", "Sparky", "Fred", "Harvey", "Rover", "Paul", "Applesauce", "Captain"];
var dogPound = [];
var breed = ["Yorkshire Terrier", "Husky", "Bluetick Coonhound", "Dachshund", "Great Dane", "Chihuahua", "Boston Terrier", "Bulldog"];
var dogColor = ["black", "white", "brown", "multi-colored", "tan"];
var mood = ["happy", "silly", "sad", "hungry", "sleepy", "playful", "angry"];


// Create constructor
/* var Dog = function(n){
// Passed name in as an argument
    console.log("Dog Created.");
    this.name = n;

    console.log(this.name+" is here.")
}; */

var Dog = function(){
    console.log("Dog Created.");
    this.name = dogNames[Math.floor(Math.random()*dogNames.length)];
    console.log(this.name+" is here.");
    this.breed = breed[Math.floor(Math.random()*breed.length)];
    console.log(this.name+" is a "+this.breed+".");
    this.color = dogColor[Math.floor(Math.random()*dogColor.length)];
    console.log(this.name+"'s fur is "+this.color+".");
    this.mood = mood[Math.floor(Math.random()*mood.length)];
    console.log(this.name+" is feeling "+this.mood+" today.");

    this.scores = [];
};

// Instantiate our constructor (create instance)

// Prototypes

// Canvas

var canvas = document.getElementById("myCanvas");

Dog.prototype.dogBody = function(){
    var ctx = canvas.getContext("2d");
   /* ctx.fillStyle = "#777777";
    ctx.fillRect(50,50,150,75); //x,y,w,h
    ctx.fillStyle = "#666666";
    ctx.fillRect(50,120,20,45); // Leg 1
    ctx.fillStyle = "#666666";
    ctx.fillRect(180,120,20,45); // Leg 2 */
    // Circle for Head
    ctx.beginPath();
    ctx.fillStyle = "#777777";
    ctx.arc((Math.random()*800),(Math.random()*600),(Math.random()*40),0,2*Math.PI);
    ctx.fill();
};




// Create a prototype of a dog that adds bark

Dog.prototype.bark = function(){
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#666666";
    ctx.fillRect((Math.random()*800),(Math.random()*600), Math.random()*40, Math.random()*40);
    console.log(this.name+" is barking.");
};

// Dog scores in Dog Show - calculate the average
// Smart dog is smart - calculates his own average
Dog.prototype.getAverage = function(){
    var total = 0; // Holds total of average scores
    this.scores.forEach(function(e){ // For Each loop to add scores in the "scores" array
        total+= e;
    });
    return total/this.scores.length; // Makes average
};

// Creates one instance, will be at TOP
var smartDog = new Dog();
smartDog.scores = [8,9,10];
var a = smartDog.getAverage();
console.log(smartDog.name, "'s average is ", a);

 var myDog = new Dog();


for (i=0; i<100; i++){
    var myDog = new Dog();
    dogPound.push(myDog);
    myDog.bark();
    myDog.scores = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    var a = myDog.getAverage();
    console.log(myDog.name+"'s average score is "+a+".");
    myDog.dogBody();
}

console.log(dogPound);

/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

    // Creating the array variables
var names = ["Jonah", "Mable", "Quinn", "Chelsey", "Elise"];
var jobs = ["Firefighter", "Programmer", "Doctor", "Artist"];
var actions = ["sleeping", "eating", "working", "slacking off", "stuck in traffic", "having a good time"];


    // Creating the constructor, picking random names
var Person = function(){
    this.name = names[Math.floor(Math.random()*names.length)];
    this.job = jobs[Math.floor(Math.random()*jobs.length)];
    this.action = actions[Math.floor(Math.random()*actions.length)];
};

// variables for the HTML
var person1 = document.querySelector("#r1c1");
var person2 = document.querySelector("#r2c1");
var person3 = document.querySelector("#r3c1");

var job1 = document.querySelector("#r1c2");
var job2 = document.querySelector("#r2c2");
var job3 = document.querySelector("#r3c2");

var action1 = document.querySelector("#r1c3");
var action2 = document.querySelector("#r2c3");
var action3 = document.querySelector("#r3c3");

// Loop of three new instances
for (i=0; i<3; i++) {
    var person = new Person();
    // Make sure that the name is not repeated
    // Unsure how to do that in this instance ???????
    console.log(person);
}

    // Function to put person instances into HTML
function populateHTML(){
    person1.innerHTML = person.name;
    job1.innerHTML = person.job;
    action1.innerHTML = person.action;

    // not sure how to do a different person with a loop involved
    person2.innerHTML = person.name;
    job2.innerHTML = person.job;
    action2.innerHTML = person.action;

    person3.innerHTML = person.name;
    job3.innerHTML = person.job;
    action3.innerHTML = person.action;
}

populateHTML();
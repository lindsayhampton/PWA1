/**
JSON

 * JSON: JavaScript Object Notation.
 * JSON is a syntax for storing and exchanging data.
 * JSON is an easier-to-use alternative to XML.

 * JSON - Evaluates to JavaScript Objects
   The JSON format is syntactically identical to the code for creating JavaScript objects.

    Because of this similarity, instead of using a parser (like XML does), a JavaScript
    program can use standard JavaScript functions to convert JSON data into native JavaScript objects.

 * JSON Syntax Rules
 * JSON syntax is derived from JavaScript object notation syntax:

    Data is in name/value pairs
    Data is separated by commas
    Curly braces hold objects
    Square brackets hold arrays

*** JSON names require double quotes. JavaScript names don't. ***
        "firstName":"John"
              vs
        firstName: "John";

 * JSON values can be:

    A number (integer or floating point)
    A string (in double quotes)
    A Boolean (true or false)
    An array (in square brackets)
    An object (in curly braces)
    null

 * JSON objects are written inside curly braces.
        {"firstName":"John", "lastName":"Doe"}

 * JSON Arrays
 * JSON arrays are written inside square brackets.
    Just like JavaScript, a JSON array can contain multiple objects:
        "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter","lastName":"Jones"}
        ]

 */


//PARSE A JSON TEXT(STRING) INTO A JAVASCRIPT OBJECT
//USE data.js object "employees"
// converts json text into javascript object
//json.parse(variable name assigned to json object)
var obj = JSON.parse(text);
console.log(obj);

console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);

//ACCESSING A JSON ARRAY
//Use data.js object "people"
//Use json_weather.js

console.log(myJSON.people[0]);

console.log(data.results.forecast[0].day);

//Load JSON data in the HTML using DOM

// window.onload = function(){}
document.querySelector("#header").innerHTML = "Today is "+data.results.forecast[0].day;

/**********   PRACTICE EXERCISES   *******************/

// 1a. Console.log the forecast for the next 3 days in sentence (String) format
// example: Today is Saturday. The high is 82. The low is 65. It will be partly cloudy.

satForecast = "Today is "+data.results.forecast[1].day+". The high is "+data.results.forecast[1].high+". The low is "+data.results.forecast[1].low+". It will be "+data.results.forecast[1].text+".";
console.log(satForecast);

// 1b. Display the results in the HTML page using DOM (You may need to create a place for it or use existing code)

document.querySelector("#textPlace").innerHTML = satForecast;

// 2. Console.log each of the employees showing their full names (from the object "employees"
// and jobs (from the object "people").

var e1 = obj.employees[0].firstName+" "+obj.employees[0].lastName+"'s job is "+myJSON.people[0].job;
console.log(e1);
var e2 = obj.employees[1].firstName+" "+obj.employees[1].lastName+"'s job is "+myJSON.people[1].job;
console.log(e2);
var e3 = obj.employees[2].firstName+" "+obj.employees[2].lastName+"'s job is "+myJSON.people[2].job;
console.log(e3);

// 3a. Create your own JSON object or Array and console.log the information in sentence format.

var vacation = {"places":[
    {"name":"Disney World", "perk":"Kid Friendly"},
    {"name":"Las Vegas", "perk":"Adult Oriented"},
    {"name":"The Beach", "perk":"Cheap and Fun"}
]};

var vac1 = "You can vacation at "+vacation.places[0].name+", which is great because it is "+vacation.places[0].perk+".";
var vac2 = "You can vacation at "+vacation.places[1].name+", which is great because it is "+vacation.places[1].perk+".";
var vac3 = "You can vacation at "+vacation.places[2].name+", which is great because it is "+vacation.places[2].perk+".";

console.log(vac1);
console.log(vac2);
console.log(vac3);

//3b. REPEAT and display in HTML with DOM

document.querySelector("#num1").innerHTML = vac1;
document.querySelector("#num2").innerHTML = vac2;
document.querySelector("#num3").innerHTML = vac3;
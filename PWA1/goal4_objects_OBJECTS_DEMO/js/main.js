/*
    PWA1: Goal 4: Course Material 4

	1. Objects
	2. Document Object Model
	3. Events and Callbacks
*/

// application scope (self-executing function)
(function(){


/*	==================================================================
	Objects
	------------------------------------------------------------------
		
	- objects are collections of keys and values for storing data {KEY : Value} pairings, also 
		known as associative pairing
 
	- arrays and objects are both used to store multiple values 
		arrays vs objects:  
 			1.  arrays store by numerical index
 			2.  objects store by a key index
	
	- keys in objects are names (similar to variables), used to index a value inside the object

	-similar to making an array, we declare the object’s properties inside the literal, separating by comma...
*/
console.log('------Objects ----------');

//{KEY : Value} pairings,

  /*  person = {
        'name':'James Bond',
        'age':35,
        'secretAgent':true
    };   */

    person = {
        name:"James Bond",
        age:35,
        secretAgent:true
    };



/* accessing object properties
     - below are 3 ways you can access the property information in an object
         1. dot notation
         2. index notation using a variable as the index
         3. index notation using a string

     - also keep in mind that since the keys can be strings, you could access the keys using string variables
 */

    //getters

    var personAge = 'age';
    console.log(person.name, person[personAge], person.secretAgent);

 // setter

    person['age'] = 45;
    person.height = 5;

    console.log(person);

//nested objects

    person = {
        birthday: {month: 02, day: 12},
        name: "bond"
    };

    console.log(person['birthday']['month']);
    console.log(person.birthday.month, person.name);

    
//---------------------------------------------

// Object within an object

console.log('------Object within an object, Arrays, Function ----------');

    var thatGuy = {
        name: "James Bond",
        course: "PWA1",
        address: {
            city: "Orlando",
            state: "Florida"
        },
        showMyAddress: function(){
            var x = this.address.city + "," + this.address.state;
            return x;
        }

    };



//properties & methods
/*
	- objects are useful primarily for properties and methods:
		- properties are variable/keys that belong to an object only
		- methods are function/keys that belong to the object only 
		= these members are the foundation of an oop model
*/

console.log('------Objects - properties & methods ----------');

//Method 1 "Basic"

   var fsStudent = {};

    fsStudent.age = 22;
    fsStudent.career = "Web Dev";
    fsStudent.sayHello = function(){
        console.log("Hello!");
    };
   
   


// above, we first initialize the object, then we created 2 properties 
//   for the object, and a method called sayHello - notice that the method is 
//	 being created by an assignment operator, just like the properties.

// we can also access the methods and properties of an object using  [ ] , 
// 	by using their name as a string - all of the below are valid:

console.log("Method 1");

    fsStudent.sayHello();

/* ===============================================================
	The for-in object loop
------------------------------------------------------------------	

	for(var key in obj){
		obj[key]
	}
*/
    console.log("---------- Object - For In Loop ----------------");

   
   var students = {
       name: "John Smith",
       gender: "male",
       job: "student"
   };

    for(var key in students){
        console.log("Key Name:", key);
        console.log("Value of Key:", students[key]);
    }
   



/*
	===============================================
	MORE Object infomation
	
		- most strictly-typed languages have clear separations in their data types 
			and classical behavior

		- JavaScript is simpler:
			- numbers, strings, and booleans are the only separate data types in JavaScript
			- objects, arrays, regular expressions, and functions are all considered 
				to be objects.
			- in addition, anything that is not an object, acts like an object

			i.e.   "Literal Syntax"
			myStr = ‘James Bond’;
			alert(myStr.length)   //will return a 10


			- previously, we used the most common constructor for creating our 
				variables, which is the literal syntax:

				var myNum = 5;

			- we could also create this variable using its "constructor" equivalent:
	
				var myNum = new Number(5);

			- both have the same result - the literal syntax is preferable	

			- using these constructors, we can also convert from one data type to another.
*/

})(); // end wrapper
/******************************************************************************
STUDENT ACTIVITY 1:

	PART 1:
	1.  Create an object that has the following keys.
         a. schoolName (i.e "Full Sail")
         b. address  (i.e "123 University Ave")
         c. studentCount (i.e 16000)
         d. students (use an array of objects) - create at least 3 objects in the array)
             i. name (i.e "James Bond")
             ii. GPA (i.e 3.9)
             iii. classes (use an array with the ability to store at least 2 class names)
                    (i.e ['PWA1', 'PWA2'])

        2.	console.log the following
             a. school name in both the dot syntax and index syntax
             b  create a variable name "newCnt" that is equal to studentCount, and console.log
                    the studentCount using the newCnt variable.
             c.  console.log the address using index syntax
             d. one student's GPA using dot syntax and index syntax
 ----------------------------------------------------------------------------- */

console.log('------ STUDENT ACTIVITY 1 - ANSWERS BELOW ----------');

var student1 = {name:"Kevin Bacon",gpa: 3.46, classes:["Illegal Dancing 101","Attacking Underground Worms 201"]};
var student2 = {name: "Paula Deen", gpa: 2.9, classes:["Political Correctness 101", "Home Economics"]};
var student3 = {name: "Magic Johnson", gpa: 2.1, classes: ["Sex Education", "Intramural Sports"]};

var school = {schoolName:"Williamstown High School", address:"321 Williamstown Road", studentCount: 5767, students:[student1,student2,student3]};

console.log(school.schoolName);
console.log(school["schoolName"]);

var newCnt = school.studentCount;
console.log(newCnt);

console.log(school["address"]);
console.log(school.students[0]["gpa"]);

// this is integrating multiple data types - object with an array of objects



/* ----------------------------------------------------------------------------
 STUDENT ACTIVITY 2:

    1.  Using the above code, create a function that will find the average grade
        a. create an anonymous function named "gradeAvg"
        b. the function should accept as a parameter the object above
        c. create a for loop to total up the average grade for ALL students
        d. "return" the average GPA answer to the item that called the function

    2.  console.log the average grade by calling the gradeAvg method.
----------------------------------------------------------------------------- */


console.log('------ STUDENT ACTIVITY 2 - ANSWERS BELOW ----------');

var gradeAvg = function(school){
    for (i = 0; i < school["students"].length; i++){
        //console.log("test");
        //console.log(school["students"][1]["gpa"]);
        var j;
        j=school["students"][i]["gpa"];
        console.log(j);
    }
}

gradeAvg(school);
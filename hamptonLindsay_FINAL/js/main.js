/*
    Mid Terms for PWA1
*/

(function(){


var button = document.querySelector(".buttonred");
var i = 0;

    var studentArray = [];

    // Constructor
    var Students = function(name, street, city, state, gpa) {
        studentArray.push({
            name: name,
            address: {street: street, city: city, state: state},
            gpa: gpa,
            date: Date()
        });
    };

    Students.prototype.gradeAverage = function(){
        var total = 0; //
        this.grades.forEach(function(e){
            total+= e;
        });
        var done = total/this.grades.length;
        return done.toFixed(2);
};


    // Create Instances
    var student1 = new Students("Kevin Bacon", "100 Illegal Dancing Lane", "Bomont", "Oklahoma", [2.7, 3.1, 4.0]);
    student1.grades = studentArray[0].gpa;
    var a = student1.gradeAverage();
    console.log(studentArray[0].name, "'s average is ", a);

    var student2 = new Students("Ted Mosby", "4 Lonely Lane", "New York City", "New York", [3.9, 3.8, 4.0]);
    student2.grades = studentArray[1].gpa;
    var b = student2.gradeAverage();
    console.log(studentArray[1].name, "'s average is ", b);

    // Loop for Console
    function studentLoop() {
        var j = studentArray.length;
        for (var i = 0; i < j; i++) {
            console.log(["name"] + " : " + studentArray[i].name);
            console.log(["address"] + " : " + (studentArray[i].address["street"] + ", " + studentArray[i].address["city"] + ", " + studentArray[i].address["state"]));
            console.log(["gpa"] + " : " + studentArray[i].gpa);
            console.log(["date:"+" : "+ studentArray[i].date]);
        }
    }

    studentLoop();

    var student3 = new Students("Shawn Spencer", "321 Psychic Drive", "Santa Barbara", "California", [4.0,4.0,4.0]);
    student3.grades = studentArray[2].gpa;
    var c = student3.gradeAverage();
    console.log(studentArray[2].name, "'s average is ", c);


    console.log("****************** New Student Added ******************");
    studentLoop();


var displayData = function(){
	
	var innerName = document.querySelector("#name");
	var innerAddress = document.querySelector("#address");
	var innerGpa = document.querySelector("#gpa");
	var innerDate = document.querySelector("#date");
	var innerAvgGpa = document.querySelector("#gpaavg");

	if (i < max){
		innerName.innerHTML = 'Name:  ' + studentArray[i].name;
		innerAddress.innerHTML = 'Address:  ' + studentArray[i].address.street + ' ' + studentArray[i].address.city + ' ' + studentArray[i].address.state;
		innerGpa.innerHTML = 'GPA:  ' + studentArray[i].gpa;

		//Only need the below for the last step.
		innerDate.innerHTML = 'Date:  '+ Date();
        //innerAvgGpa.innerHTML = 'Grade Average: ' + studentArray[i].gradeAvg;

        if(i==0){
            innerAvgGpa.innerHTML = 'Grade Average: ' + a;
        } else if (i==1){
            innerAvgGpa.innerHTML = 'Grade Average: ' + b;
        } else if (i==2){
            innerAvgGpa.innerHTML = 'Grade Average: ' + c;
        }

		
		 /*//console.log(students[i].gpa);
		var avg = gpaAvg(studentArray[i].gpa);
		
		innerAvgGpa.innerHTML = 'Average GPA:  ' + avg;
		console.log(studentArray[i].gpa.length) */

	} else{
		button.onclick = "return false";    
        document.querySelector('.buttonred').innerHTML = 'DONE!!!';

	}
	i++;
	return false;
};

var max = studentArray.length;

//click event
button.onclick = displayData;


displayData ();


   // console.log(students);

})();  // end wrapper
/*
    Mid Terms for PWA1
*/

(function(){


var button = document.querySelector(".buttonred");
var i = 0;


    // Start Final Practical

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

  // Create Instances
    var student1 = new Students("Kevin Bacon", "100 Illegal Dancing Lane", "Bomont", "Oklahoma", [2.7, 3.1, 4.0]);
    var student2 = new Students("Ted Mosby", "4 Lonely Lane", "New York City", "New York", [3.9, 3.8, 4.0]);






    var student3 = new Students("Shawn Spencer", "321 Psychic Drive", "Santa Barbara", "California", [4.0,4.0,4.0]);


    console.log("****************** New Student Added ******************");
   // studentLoop();

    console.log(studentArray.length);





var students = [
    {
        uname: 'jbond',
        address: {street: '3300 University', city: 'Winter Park', state: 'Florida'},
        gpa: [2.5, 3.0, 4.0],
        date: new Date()
    },
    {
        uname: 'mmouse',
        address: {street: '123 Test Dr', city: 'Orlando', state: 'Florida'},
        gpa: [2.0, 3.2, 3.0],
        date: new Date()
    }];


    /*    // Loop for Console
     var j = studentArray.length;
     function studentLoop() {
     for (i = 0; i < j; i++) {
     console.log(["name"] + " : " + studentArray[i].name);
     console.log(["address"] + " : " + (studentArray[i].address["street"] + ", " + studentArray[i].address["city"] + ", " + studentArray[i].address["state"]));
     console.log(["gpa"] + " : " + studentArray[i].gpa);
     console.log(["date:"+" : "+ studentArray[i].date]);
     }
     }

     studentLoop(); */

var consoleData = function(){

	for (var i = 0, j = students.length; i < j; i++){
		console.log('Name: ' + students[i].uname);
		console.log('Address: ' + students[i].address.street + '  ' + students[0].address.city + ' ' + students[0].address.state);
		console.log('GPA: ' + students[i].gpa);
		console.log('Date:  '
			+ students[i].date.getMonth() + "/"
			+ students[i].date.getDate() + "/" 
       		+ students[i].date.getFullYear()
       	);
	};	
	return false;
};


var addData = function(newname, newstreet, newcity, newstate, newgpa, newdate){

	students.push({
		uname: newname,
    	address: {street: newstreet, city: newcity, state: newstate},
    	gpa: newgpa,
    	date: newdate
	});	
};


var gpaAvg = function(myAry){

	//console.log(myAry.length);
	var gradeAvg = 0;
	for (var i = 0, max = myAry.length; i < max; i++){
		gradeAvg = gradeAvg + myAry[i];

	};

	var num = gradeAvg/max;
	return num.toFixed(2);
	//return Math.toFixed(gradeAvg/max);
};


var displayData = function(){
	
	var innerName = document.querySelector("#name");
	var innerAddress = document.querySelector("#address");
	var innerGpa = document.querySelector("#gpa");
	var innerDate = document.querySelector("#date");
	var innerAvgGpa = document.querySelector("#gpaavg");

	if (i !== max+1){
		innerName.innerHTML = 'Name:  ' + students[i].uname;
		innerAddress.innerHTML = 'Address:  ' + students[i].address.street + ' ' + students[i].address.city + ' ' + students[i].address.state;
		innerGpa.innerHTML = 'GPA:  ' + students[i].gpa;

		//Only need the below for the last step.
		innerDate.innerHTML = 'Date:  '
			+ students[i].date.getMonth() + "/"
			+ students[i].date.getDate() + "/" 
       		+ students[i].date.getFullYear();

		
		//console.log(students[i].gpa);
		var avg = gpaAvg(students[i].gpa);
		
		innerAvgGpa.innerHTML = 'Average GPA:  ' + avg;
		console.log(students[i].gpa.length)

	}else{
		button.onclick = "return false";    
        document.querySelector('.buttonred').innerHTML = 'DONE!!!';

	};
	i++
	return false;
};

var max = students.length;

//click event
button.onclick = displayData;

console.log('********* Below shows the original objects **************')
consoleData();
addData('super man', '123 Test Dr', 'Orlando', 'Florida', [3.2, 4.0, 2.2], new Date());
console.log(' ');
console.log('********* Below shows the new object added to the original object **************')
consoleData();
displayData ()

})();  // end wrapper
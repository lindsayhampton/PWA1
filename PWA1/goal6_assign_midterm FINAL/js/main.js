/*
    Mid Terms for PWA1
*/

(function(){


var button = document.querySelector(".buttonred");
var i = 0;

// Students Array

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

    // Console.log loop through student data

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

    // Add a new student to the array

var addData = function(newname, newstreet, newcity, newstate, newgpa, newdate){

	students.push({
		uname: newname,
    	address: {street: newstreet, city: newcity, state: newstate},
    	gpa: newgpa,
    	date: newdate
	});	
};

    // Calculate GPA Average

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

// Function to Display Data in the HTML

var displayData = function(){

	// Query Selectors
	var innerName = document.querySelector("#name");
	var innerAddress = document.querySelector("#address");
	var innerGpa = document.querySelector("#gpa");
	var innerDate = document.querySelector("#date");
	var innerAvgGpa = document.querySelector("#gpaavg");

    // If i < student array length
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
// Could also use eventlistener instead of onclick
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
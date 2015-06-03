/*
    Lindsay Hampton
	* Mid Terms for PWA-1
*/

(function() {

// Students

    var student1 = {
        name: "Kevin Bacon",
        address: {
            street: "100 Illegal Dancing Lane",
            city: "Bomont",
            state: "Oklahoma"
        },
        gpa: [2.7, 3.1, 4.0]
    };
    var student2 = {
        name: "David Tennant",
        address: {
            street: "1234 Tardis St",
            city: "Hollywood",
            state: "California"
        },
        gpa: [3.7, 3.3, 3.9]
    };
    var student3 = {
        name: "Ferris Bueller",
        address: {
            street: "123 Fake Street",
            city: "Chicago",
            state: "Illinois"
        },
        gpa: [2.2, 2.5, 3.0]
    };

    var studentArray = [student1, student2, student3];

// Console Student

    function studentLoop() {
        var j = studentArray.length;
        for (var i = 0; i < j; i++) {
            console.log(["name"] + " : " + studentArray[i].name);
            console.log(["address"] + " : " + (studentArray[i].address["street"] + ", " + studentArray[i].address["city"] + ", " + studentArray[i].address["state"]));
            console.log(["gpa"] + " : " + studentArray[i].gpa);
        }
    }

    studentLoop();

    function newStudent(name, street, city, state, gpa) {
        this.name = name;
        this.address = {street: street, city: city, state: state};
        this.gpa = gpa;
    }

    var student4 = new newStudent("Ted Mosby", "4 Lonely Lane", "New York City", "New York", [3.9, 3.8, 4.0]);
    studentArray.push(student4);

    studentLoop();

    function gradeAvg(arr) {
        var add = arr[0] + arr[1] + arr[2];
        var avg = add / arr.length;
        avg = avg.toFixed(2);
        return avg;
    }



// Button Stuff
    var click = 0;

    var button = document.querySelector(".buttonred");
    button.onclick = buttonClicked;

    function buttonClicked() {
        console.log(click);
        click++;



// Display

    if (click == 0) {
        document.querySelector("#round").innerHTML = "Click Below To View Students";
        document.querySelector(".buttonred").innerHTML = "View";
    } else if (click == 1) {
        function showFirst() {
            document.querySelector("#name p").innerHTML = "Student Name" + " : " + studentArray[0].name;
            document.querySelector("#address p").innerHTML = "Address" + " : " + studentArray[0].address["street"] + ", " + studentArray[0].address["city"] + ", " + studentArray[0].address["state"];
            document.querySelector("#gpa p").innerHTML = "Grades" + " : " + studentArray[0].gpa;
            document.querySelector("#gpaavg p").innerHTML = "GPA" + " : " + gradeAvg(studentArray[0].gpa);
            document.querySelector("#date p").innerHTML = Date();
        }
        showFirst();
    }
    else if (click == 2) {
        // Display Second

        function showSecond() {
            document.querySelector("#name p").innerHTML = "Student Name" + " : " + studentArray[1].name;
            document.querySelector("#address p").innerHTML = "Address" + " : " + studentArray[1].address["street"] + ", " + studentArray[1].address["city"] + ", " + studentArray[1].address["state"];
            document.querySelector("#gpa p").innerHTML = "Grades" + " : " + studentArray[1].gpa;
            document.querySelector("#gpaavg p").innerHTML = "GPA" + " : " + gradeAvg(studentArray[1].gpa);
            document.querySelector("#date p").innerHTML = Date();
        }
        showSecond()
    } else if (click == 3) {
        // Display Third

        function showThird() {
            document.querySelector("#name p").innerHTML = "Student Name" + " : " + studentArray[2].name;
            document.querySelector("#address p").innerHTML = "Address" + " : " + studentArray[2].address["street"] + ", " + studentArray[2].address["city"] + ", " + studentArray[2].address["state"];
            document.querySelector("#gpa p").innerHTML = "Grades" + " : " + studentArray[2].gpa;
            document.querySelector("#gpaavg p").innerHTML = "GPA" + " : " + gradeAvg(studentArray[2].gpa);
            document.querySelector("#date p").innerHTML = Date();
        }
        showThird()
    } else if (click == 4) {
        // Display Fourth

        function showFour() {
            document.querySelector("#name p").innerHTML = "Student Name" + " : " + studentArray[3].name;
            document.querySelector("#address p").innerHTML = "Address" + " : " + studentArray[3].address["street"] + ", " + studentArray[3].address["city"] + ", " + studentArray[3].address["state"];
            document.querySelector("#gpa p").innerHTML = "Grades" + " : " + studentArray[3].gpa;
            document.querySelector("#gpaavg p").innerHTML = "GPA" + " : " + gradeAvg(studentArray[3].gpa);
            document.querySelector("#date p").innerHTML = Date();
        }
        showFour()
    } else {
        document.querySelector("#round").innerHTML = "You Have Viewed All Students";
        document.querySelector(".buttonred").innerHTML = "Done!";
        button.onclick = false;
    } }
})();
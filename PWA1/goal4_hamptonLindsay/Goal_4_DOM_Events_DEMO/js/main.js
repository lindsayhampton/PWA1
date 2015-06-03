/*
    PWA1: Goal 4: Course Material 4
    NAME:

/*
	==================================================================
	DOCUMENT OBJECT MODEL EVENTS
	------------------------------------------------------------------

	document	// global DOM object
	window		// global DOM object
*/
console.log('------------ DOCUMENT OBJECT MODEL EVENTS -------------------');

/*
==================================================================
DOM Events  (lecture slides)
------------------------------------------------------------------
    - listener and handler
- there are 2 key aspects to any event, the event listener and the event handler
1. the event listener is an property associated with the DOM that waits for the event trigger to
occur (i.e click, mouseover), and then fires the event handler
2. the event handler is the function that will execute when the event is fired

- using dot syntax, the listener for any element is available as a property

- An event listener is all lowercase with the prefix "on"

element.onclick		//click listener
element.onmousemove			//mousemove listener


- The function is the event handler.  Can be anonymous or named.

    elementObj.onclick = myFn;
element.onclick = function(){};

- every event listener automatically passes an "event" object with information about the event
- the function's only argument is the EVENT OBJECT (e)
- the handler must receive it as an argument
- many developers will use the "e" as the function parameter
- The function's CONTEXT (this) is the html element.
*/
console.log('------------ DOM Events Ex 1-------------------');

//onclick Events

document.getElementById("myBtn").onclick = displayDate;

function displayDate(e) {
    document.getElementById("demo").innerHTML = Date();
    return false;
    e.preventDefault();
}

//eventListener

    var x = document.getElementById("myBtn2");
    x.addEventListener("click", welcomeMessage);
    x.addEventListener("click", displayDate);

    function welcomeMessage() {
        alert ("Hello World!");
        return false;
    }

    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
        return false;
    }

// loop through navigation to apply to all
var nav = document.querySelectorAll('#nav li a');

for(i=0; i<nav.length; i++){

    console.log(nav[i]);

    nav[i].onclick = function(e){
        console.log(e);

        return false;
        e.preventDefault(); //prevents the default behavior

    }

}






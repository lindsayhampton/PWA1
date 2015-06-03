/*
    PWA1: Goal 4: Course Material 4
    NAME:

/*
	==================================================================
	DOCUMENT OBJECT MODEL
	------------------------------------------------------------------

	document	// global DOM object
	window		// global DOM object
*/
console.log('------------ DOCUMENT OBJECT MODEL -------------------');

//Window DOM object
/*
 console.log(window);
 console.log(window.location);
 console.log(window.history);
 console.log(window.navigator);

 //Document DOM object
 console.log(document);
 console.log(document.body);
 console.log(document.head);
*/


/*
	==================================================================
	document.getElementById(string);
	------------------------------------------------------------------
	- Finds an html element on the page by it's CSS ID.
	- RETURNS a single DOM object.
	- Requires a string. 
	- If there are more than 1 id, it returns the first.

	------------------------------------------------------------------
	BEST PRACTICE:
	
	- Save the html element to a variable for later reference.
	- Code shouldn't repeat itself. Code shouldn't repeat itself.
*/

console.log('------------ getElementById -------------------');

 
var playbox = document.getElementById("playbox");
console.log(playbox);

/*
	==================================================================
	document.getElementsByTagName(string);
	------------------------------------------------------------------
	- Finds all html elements on the page with a matching html tag
	- RETURNS an array (collection) of DOM objects.
*/

console.log('------------ getElementsByTagName -------------------');

var anchors = document.getElementsByTagName("a");
console.log(anchors);


/*
	==================================================================
	document.querySelectorAll(string);
	------------------------------------------------------------------
		- Uses a CSS selector expression to find all html elements that match the expression.
		- Works much like stylesheet declarations (class and ID prefixes)

		- RETURNS an array (collection) of DOM objects. Even if there is 1 object.
			versus the getElementByID (that returns a single DOM element)
*/

console.log('------------ querySelectorAll -------------------');

var nav = document.querySelectorAll("#nav");
console.log(nav);

var navLinks = document.querySelectorAll("#nav li");
console.log(navLinks);

var cf = document.querySelectorAll(".clearfix");
console.log(cf);

/*
	==================================================================
	document.querySelector(string);
	------------------------------------------------------------------
		- Works just like querySelectorAll, but only returns the first match,
			If multiple exist, return the first
		
		- RETURNS a single DOM object.
*/
    console.log('------------ querySelector -------------------');

var nav = document.querySelector("#nav");
console.log(nav);


    /*
        ==================================================================
        TRAVERSAL
        ------------------------------------------------------------------
            - "Traversing" means finding other html elements from already selected
                element(s)
            - We use XML nodes for traversing

        Traversing works by parent/child/sibling relationships:

            - firstChild
            - lastChild
            - parentNode
            - nextSibling
            - previousSibling
            - childNodes

        Will be used in ALL future assignments.
    */
    console.log('------------ TRAVERSAL -------------------');

var apple = document.querySelectorAll("#nav li a")[2];
console.log(apple);

console.log(apple.parentNode);
console.log(apple.parentNode.parentNode);

console.log(apple.childNodes);
/*
	==================================================================
	Manipulating Attributes
	------------------------------------------------------------------
		- HTML elements have attributes, things like "href", "src", "title", etc
		- To access these attributes, there are specific setter/getter methods.

        Syntax:
        - element.setAttribute(attr, value)
            - always initializes an attribute to a new value
        - element.getAttribute(attr)
            - always returns a string

        attr = href, src, class
*/





/*
	==================================================================
	Manipulating CSS Classes
	------------------------------------------------------------------
		- If you use setAttribute to change the "class" attribute of an element,
			that element is immediately redrawn with the new css styles.
		
		- Just like normal, you can set MULTIPLE classes at once.
		
			element.setAttribute('class', 'thumb active')

		- FYI: Elements can have multiple classes.
*/

console.log('------------ Manipulating CSS Classes -------------------');

   var navLinks = document.querySelectorAll("#nav li");
console.log(navLinks);

navLinks[2].firstChild.setAttribute("class","navitem active");

var changeClass = navLinks[1].firstChild.setAttribute("href","http://google.com");
   

console.log('------------ Manipulating HTML -------------------');

navLinks = document.querySelectorAll("#nav a");
console.log(navLinks);

console.log(navLinks[2].innerHTML);

navLinks[2].innerHTML = "This is a New Link!!";










var span = document.querySelectorAll("#tagbox span");
console.log(span);

span[1].innerHTML = "Woah, I can change what this specific span says without changing the other ones.";




var bacon = document.querySelector(".article");
bacon.innerHTML = "Mmmmm, bacon....";



var stuff = document.querySelectorAll(".more");
console.log(stuff);
stuff[2].innerHTML = "I can change this toooo!";


var color = document.querySelector(".article p").style.color = "blue";


 // end wrapper
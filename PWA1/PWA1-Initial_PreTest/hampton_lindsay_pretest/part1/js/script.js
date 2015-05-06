/*
 Lindsay Hampton
 May 4, 2015
 PWA 1
 Pre-Test
 */

alert("Welcome to my Online Store!");


var itemCost = prompt("What is the cost of the item you are going to buy?\nPlease leave out the dollar sign.");

if(itemCost === "" || isNaN(itemCost)){
    prompt("I'm sorry, there was a problem with your input. Please only enter numbers and remember that this field is required.\n What is the cost of the item you are going to buy?");
}

var discountPercent = prompt("What is the discount percentage for this item?");

if(discountPercent === "" || isNaN(discountPercent) || discountPercent < 0 || discountPercent > 100){
    prompt("I'm sorry, there was a problem with your input. Please only enter numbers between 0-100 and remember that this field is required.\n What is the discount on the item you are going to buy?");
}

function totalPrice(cost, discount){
    var disDecimal = discount / 100;
    var totalDis = cost * disDecimal;
    var price = cost -= totalDis;
    return price;
}

var todaysPrice = totalPrice(itemCost,discountPercent);

console.log("The price of an item costing $"+itemCost+" and a discount of "+discountPercent+"% is "+todaysPrice+"!");

alert("The price of an item costing $"+itemCost+" and a discount of "+discountPercent+"% is "+todaysPrice+"!");
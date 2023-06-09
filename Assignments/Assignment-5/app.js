// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
document.write("<h3>Task 1</h3>")
var sumNumber1 = +prompt("For Sum Enter Number 1");
var sumNumber2= +prompt("For Sum Enter Number 2");
var sumResult= sumNumber1 +sumNumber2;
document.write("<b>Sum</b> of  " + sumNumber1 + " and " + sumNumber2 + " is " + sumResult + "<br><br>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

document.write("<h3>Task 2</h3>")
// Subtraction
var subNumber1 = +prompt("For Subtract Enter Number 1");
var subNumber2= +prompt("For Subtract Enter Number 2");
var subResult= subNumber1  - subNumber2;
document.write("<b>Subtraction</b> of  " + subNumber1 + " and " + subNumber2 + " is " + subResult + "<br><br>");

// multiplication
var mulNumber1 = +prompt("For Multiplication Enter Number 1");
var mulNumber2= +prompt("For Multiplication Enter Number 2");
var mulResult= mulNumber1  * mulNumber2;
document.write("<b>Multiplication</b> of  " + mulNumber1 + " and " + mulNumber2 + " is " + mulResult + "<br><br>");


// division
var divNumber1 = +prompt("For Division Enter Number 1");
var divNumber2= +prompt("For Division Enter Number 2");
var divResult= divNumber1  / divNumber2;
document.write("<b>Division</b> of  " + divNumber1 + " and " + divNumber2 + " is " + divResult + "<br><br>");

// modulus
var modNumber1 = +prompt("For Modulus Enter Number 1");
var modNumber2= +prompt("For Modulus Enter Number 2");
var modResult= modNumber1  % modNumber2;
document.write("<b>Modulus</b> of  " + modNumber1 + " and " + modNumber2 + " is " + modResult + "<br><br>");


// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3. 
// l. Output : “The remainder is : 0”.

var mathVariable;
document.write("<h3>Task 3 - JS Mathematic Expressions</h3>")
document.write("Value after variable declaration is: " + mathVariable + "<br>");
mathVariable= 5;
document.write("Initial value: " + mathVariable + "<br>");
mathVariable++;
document.write("Value after increment is: " + mathVariable + "<br>");
mathVariable+=7;
document.write("Value after addition is: " + mathVariable + "<br>");
mathVariable--;
document.write("Value after decrement is: " + mathVariable + "<br>");
mathVariable= mathVariable % 3;
document.write("The remainder is : " + mathVariable + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie
document.write("<h3>Task 4</h3>")
var costPerTicket= 600;
var fiveTickets= 5 * costPerTicket;
document.write("Total cost to buy 5 tickets to a movie is " + fiveTickets + "PKR <br> <br>");


// 5. Write a script to display multiplication table of any number in your browser.
document.write("<h3>Task 5 - Table of 4</h3>")
var tableNum= 4;
for (i=0; i <=10 ; i++){
    document.write("<br>" + tableNum + " * " + i + " = " + tableNum*i )
}

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
document.write("<br> <h3>Task 6 - The Temperature Converter</h3>")
var Celsius=25;
var f= (Celsius * 9/5) + 32;
document.write( Celsius + "°C is " + f + "°F");

var Fahrenheit= 70;
var c= (Fahrenheit - 32) * 5/9;
document.write("<br>" + Fahrenheit + "°F is " + c + "°C <br>");

// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
var priceItem1= 650;
var priceItem2= 100;
var orderedQuantityItem1= 3;
var orderedQuantityItem2= 7;
var shippingCharges= 100;
document.write("<br> <h3>Task 7 - Shopping Cart</h3>")
document.write("Price of item 1 is " + priceItem1);
document.write("<br> Quantity of item 1 is " + orderedQuantityItem1);
document.write("<br> Price of item 2 is " + priceItem2);
document.write("<br> Quantity of item 2 is " + orderedQuantityItem2);
document.write("<br> Shipping Charges " + shippingCharges);
var total= (priceItem1* orderedQuantityItem1) + (priceItem2*orderedQuantityItem2) + 100;
document.write("<br> <br>Total cost of your order is " + total );


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
{/* <h1>Marks Sheet</h1>; */}
var totalMarks=980;
var marksObtained= 804;
document.write("<br> <h3>Task 8 - Marks Sheet</h3>")
document.write("Total Marks : " + totalMarks);
document.write("<br> Marks Obtained : " + marksObtained);
var percentage= (marksObtained/totalMarks) * 100;
document.write("<br> Percentage : " + percentage + "%");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var PKR= (10 * 104.80) + ( 25 * 28);
document.write("<br> <h3>Task 9 - Currency in PKR</h3>")
document.write("Total Currency in PKR : " + PKR)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
document.write("<h3>Task 10</h3>")
var initNumber=10;
var calculations= ((10 +5) * 10)/2;
document.write("I have initialized a number with 10. Calculations in a single expression ((10 +5) * 10)/2 and result is " + calculations)

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.
var b_year= 1992;
var todayDate= new Date();
var currentYear= todayDate.getFullYear();
var age= currentYear - b_year;
document.write("<br> <h3>Task 11 - The Age Calculator</h3>")
document.write("Current Year : " + currentYear);
document.write("<br> Birth Year : " + b_year);
document.write("<br> Your age is : " + age);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius=20;
var circumference= 2 * 3.142 * radius;
document.write("<br> <h3>Task 12 - The Geometrizer</h3>")
document.write("Radius of a circle is : " + radius);
document.write("<br> The Circumference is : " + circumference);
var area= 3.142 * radius * radius;
document.write("<br> The Area is : " + area);


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

var favSnack= "chocolate chip"
var currentAge=15;
var maxAge=65;
var estimatedAmount=3;
var totalEat= (maxAge - currentAge) * estimatedAmount;
document.write("<br> <h3>Task 13 - The Lifetime Supply Calculator</h3>")
document.write("Favorite Snack:  " + favSnack);
document.write("<br> Current age:  " + currentAge );
document.write("<br> Estimated Maximum Age:  " + maxAge);
document.write("<br> Amount of snacks per day:  " + estimatedAmount )
document.write("<br> You will need " + totalEat + "  "  + favSnack + " to last you until the rip old age of " + maxAge + " <br> ")


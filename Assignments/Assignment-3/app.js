// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age= 15;
alert ("I am " + age + " years old.");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.
var visits= 15;
alert ("You have visited this site " + visits + " times.");


// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear= 1990;
document.write("My birth year is " + birthYear + ". <br>");
document.write("Data type of my declared variable is " + typeof birthYear + ".<br><br>");

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var store= "www.xyzClothing.com";
var name="Maria";
var productTitle="bag";
var quantity =3;
document.write(name.bold() + " ordered " + quantity + " " + productTitle.bold() + "(s) on " + store.bold() + ".");
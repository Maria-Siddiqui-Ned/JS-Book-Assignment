// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
cityName = prompt('Enter city name : ' );
if ( cityName === 'KARACHI' || cityName === 'karachi' || cityName === 'Karachi'){
    alert('“Welcome to city of lights”');
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma’am.
gender = prompt('Enter your gender: ');
if (gender === 'male' || gender === 'Male'){
    alert('Good Morning Sir!');
} 
else if (gender === 'female' || gender === 'Female'){
    alert('Good Morning Ma’am!');
} 
else{
    alert('enter male or female')
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var traffic_light = prompt('Enter the traffic light color form Red, Yellow or Green : ');
if (traffic_light === 'Red'){
    alert('Must Stop!');
}
else if (traffic_light === 'Yellow'){
    alert('Ready to move');
}
else if (traffic_light === 'Green'){
    alert('Move now');
}
else{
    alert('Enter right colour light');
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
//    show the message “Please refill the fuel in your car”
var remaining_fuel = prompt('Enter remaining fuel in car (in litres): ');
if (remaining_fuel <= 0.25){
    alert('Please refill the fuel in your car');
}
else{
    alert('You can go anywhere :) \n Fuel is enough');
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. 
// Take percentage & compute grade as per following table:
var english = +prompt('Enter your English marks: ');
var urdu = +prompt('Enter your Urdu marks: ');
var math = +prompt('Enter your Math marks: ');

var total_marks = 300;
var total_obtained_marks = english + urdu + math;
var percentage = ( total_obtained_marks / total_marks) * 100;
 document.write("<h3>Task 6 - MARKSHEET </h3>");

    document.write('<b>Total Marks</b>: ' + total_marks + '</br>');
    document.write('<b>Marks Obtained</b>: '+ total_obtained_marks + '</br>');
    document.write('<b>Percentage</b>: ' + percentage + '%</br>');

    if(percentage >= 80){
    document.write('<b>Grade</b>: A-one </br>');
    document.write('<b>Remarks</b>: Excellent </b>');
    }

    else if(percentage >= 70){
    document.write('<b>Grade</b>: A </br>');
    document.write('<b>Remarks</b>: Good </br>');
    }
    else if(percentage >= 60) {     
    document.write('<b>Grade</b>: B </br>');
    document.write('<b>Remarks</b>: You need to improve </b>');
    }
    else if(percentage < 60){
    document.write('<b>Grade</b>: Fail </br>');
    document.write('<b>Remarks</b>: Sorry </b>');
    }
    else{
    document.write('Enter a valid number </b>');
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

document.write("<h3>Task 7 - Guess Game</h3>");
var secret_num = 4;
var guess = prompt('Guess a sceret number ranging from 0 till 10 : ');
if (guess === secret_num){
    document.write('Bingo! Correct Answer !!! </b></b>');
}
else if(guess + 1 === secret_num){
    document.write('Close enough to the correct answer  </b>');
}
else{
    document.write('Wrong guess  </b>');
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var number = prompt('Enter number to check whether it is divisible by 3 or not: ');
if(number % 3 == 0){
    alert('The number is divisible by 3');
}
else{
    alert('The number is not divisible by 3');
}

// 9. Write a program that checks whether the given input is an even number or an odd number.

var eo = prompt('Enter number to checks whether it is an even number or an odd number : ');
if(eo % 2 == 0){
    alert('It is an even number');
}
else if(eo % 2 != 0 ){
    alert('It is an odd number');
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = prompt("Enter the temperature (from 0 to 50)");

if (temperature > 40){
    alert("It's too hot outside ");
}
else if(temperature > 30){
    alert(" The weather today's is Normal");
}
else if(temperature >20){
    alert(" Today's weather is cool");
}
else if(temperature >10){
    alert("OMG! Today's weather is cool");
}
else{
    alert("Incorrect temerature");
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

 var calc_num1 = +prompt("Enter first number for calculation");
 var calc_num2 = +prompt("Enter second number for calculation");
 var calc_opt = prompt("Enter the operator (+ - * /  % )");
 if( calc_opt === "+"){
     alert(calc_num1 + calc_num2);
 }
 else if(calc_opt === "-"){
     alert(calc_num1 - calc_num2);
 }
 else if( calc_opt === "*"){
     alert(calc_num1 * calc_num2);
 }
 else if( calc_opt === "/"){
     alert(calc_num1 / calc_num2);
 }
 else if( calc_opt === "%"){
     alert(calc_num1 % calc_num2);
 }
 else{
     alert("Sorry! you selected wrong operation");
 }
 
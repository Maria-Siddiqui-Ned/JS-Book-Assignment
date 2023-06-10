// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var check_number = prompt("Enter number or string");
document.write("<h3>Task 1</h3>")
if( "A"<=check_number && check_number<="Z"){
    document.write("uper case");
}
else if ("a"<=check_number && check_number<="z"){
    document.write("lower case  </br>");
}
else if(-9<=check_number && check_number<=9){
    document.write("Integer </br>");
}
else{
    document.write("You have entered wrong character </br>");
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal
var num1 = +prompt("Enter a first number to check larger");
var num2 = +prompt("Enter a second number to check larger");
if (num1 == num2){
    alert('Both numbers are equal');
}
else if( num1 > num2){
    alert("This is larger " + num1);
}else if(num1 < num2){
    alert("This is larger " + num2);
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var pn0 = prompt("Enter a number to check whether it is positive, negative or zero");

if (pn0 > 0){
    alert("This is positive");
}
else if( pn0 < 0){
    alert("This is negative");
}
else{
    alert("This is zero");
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var alphabet = prompt("Enter alphabet to check whether it is vowel or consonant");

if (alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet =="o" || alphabet =="u" || alphabet == "A" || alphabet == "E" || alphabet =="I" || alphabet == "O" || alphabet == "U"){
    alert("true (this is vowel) ");
}
else{
    alert("false (this is consonant)");
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you
// entered matches the original password”. Show “Incorrect password” otherwise.
var password = 'maria123';
var entered_password = prompt('Enter your password : ');
if (entered_password != ' '){
    if(password == entered_password){
        alert('Correct! The password you entered matches the original password');
    }
    else{
        alert('Incorect Password');
    }
}
else{
    alert(' Please enter your password');
}

// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
alert (greeting = "Good day");
}
else{
    alert (greeting = "Good evening");
}

// 7. Write a program that takes time as input from user in 24  hours clock format like: 1900 = 7pm. 
// Implement the following case using if, else & else if statements

var time = prompt("Enter the time in 24  hours clock format like: 1900 = 7pm.");

if (time >=0000 && time <1200){
    alert("Good Morning");
}
else if (time >=1200 && time <1700){
    alert("Good Afternoon");
}
else if(tqa>=1700 && time <2100){
    alert("Good Evening");
}
else if (time >=2100 && time <=2359){
    alert("Good Night");
}
else{
    alert("enter correct time");
}

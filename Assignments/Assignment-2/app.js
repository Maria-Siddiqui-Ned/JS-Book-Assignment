// 1. Declare a variable called username.
var username;

// 2. Declare a variable called myName & assign to it a string 
// that represents your Full Name.
var myName = "Maria Siddiqui"
console.log(myName);

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message="Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var Name="Jhone Doe";
var age= "15";
var education= "Certified Mobile Application Development";
alert(Name);
alert(age + " years old.")
alert(education)

// 5. Write a script to display the following alert using one JS variable
var eat="PIZZA";
var len =eat.length;
alert(eat[0] + ' ' + eat[1] + ' ' + eat[2] + ' ' + eat[3] + ' ' + eat[4] + '\n'  
    + eat[0] + ' ' + eat[1] + ' ' + eat[2] + ' ' + eat[3] + ' '  + '\n'
    + eat[0] + ' ' + eat[1] + ' ' + eat[2] + ' ' + '\n'
    + eat[0] + ' ' + eat[1] + ' ' + '\n'
    + eat[0] + ' ' + '\n'
    )

document.write("Using for loop (for practice) <br>")
for (z=len; z>0; z--){
    for (i=0; i<z;i++){
        document.write(eat[i] + '\n');
    }
    document.write("<br>");   
}

document.write("<br>");   


// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use string concatenation)

var email="mariasiddiqui_ned@yahoo.com";
alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// 8. Write a script to display this in browser through JS
document.write("\n \n Yah!! I can write HTML content through JavaScript");

// 9. Store following string in a variable and show in alert and browser through JS

var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);
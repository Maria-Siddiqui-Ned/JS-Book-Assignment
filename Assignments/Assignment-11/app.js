// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var firstName = prompt('Enter your first name : ');
var lastName = prompt('Enter our last name : ');
var fullName = firstName + ' ' + lastName;
alert('Welcome to my Webpage ' + fullName);

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
document.write("<h3>Task 2</h3>")
var favoritePhone = prompt('Enter your favourite phone : ');
document.write('My favourite phone is : ' + favoritePhone + '<br>');
document.write('Length of String is : '  + (favoritePhone.length) +  '<br><br>');

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
document.write("<h3>Task 3</h3>")
var word = 'Pakistan';
document.write('String : ' + word + '<br>');
document.write("Index of 'n' : " + word.indexOf('n') + '<br>');

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
document.write("<h3>Task 4</h3>")
var last_index = 'Hello World';
document.write('String : ' + last_index + '<br>');
document.write("Last Index of 'l' : " + last_index.lastIndexOf('l') + '<br>');

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
document.write("<h3>Task 5</h3>")
var third_index = 'Pakistani';
document.write('String : ' + third_index + '<br>');
document.write('Character at Index 3 is : ' + third_index.charAt(3) + '<br>' + '<br>');

// 6. Repeat Q1 using string concat() method.
var firstName_concat = prompt('Enter your first name for concatination : ');
var lastName_concat = prompt('Enter your last name for concatination : ');
var fullName_concat = firstName_concat.concat(lastName_concat);
alert('Welcome To to my Webpage ' + fullName_concat);

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var city = 'Hyderabad';
document.write("<h3>Task 6</h3>")
document.write('City : '+city + '<br>');
city_new = city.replace("Hyder","Islam");
document.write('After replacement : '+city_new + '<br>' + '<br>');

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;
document.write("<h3>Task 8</h3>")
var message = 'Ali and Sami are best friends. They play cricket and football together.';
message = message.replace(/and/g,"&");
document.write(message + '<br>');

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
document.write("<h3>Task 9</h3>")
var n_s = '472';
document.write("Value: " + n_s + '<br>');
document.write('Type: String' + '<br>');
document.write("Value: " + parseInt(n_s) + '<br>');
document.write('Type: Number' + '<br>'  +'<br>');

// 10. Write a program that takes user input. Convert and show the input in capital letters
document.write("<h3>Task 10</h3>")
var userInput = prompt('Enter a word to convert into Upper Case : ');
document.write('User Input : ' + userInput + '<br>');
document.write('Upper Case : ' + userInput.toUpperCase() + '<br>');

// 11. Write a program that takes user input. Convert and show the input in title case.
document.write("<h3>Task 11</h3>")
var input = prompt("Enter a word to convert into Title Case : ");
var titleCase =  input.slice(0,1).toUpperCase()+ input.slice(1,input.length).toLowerCase(); 
document.write("User input: "+ input +"<br>");
document.write("Title case: " + titleCase);

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36;
document.write('Number : ' + num + '<br>');
num = num.toString()
nmu = num.replace('.','')
document.write('Result : ' + nmu + '<br>');

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
var userName = prompt('Enter your username (for validation): ');

for (var i = 0; i < userName.length; i++) {
    if (userName.charAt(i) === "@" || userName.charAt(i) === "." || userName.charAt(i) === "," || userName.charAt(i) === "!") {
    alert("Please! enter a valid username!!");
    break;
    }
    else{
        alert("You have entered a valid username!!");
    }
}
    
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
var A = ['cake','apple pie','cookie','chips','patties'];
var item = prompt('Enter item name to buy : ');
item = item.toLowerCase();
document.write("<h3>Task 14</h3>")
for(i=0; i < A.length; i++){
    if(A[i] === item){
        document.write(item + ' is available at index ' + A.indexOf(item) + ' in our bakery.' + '<br>');
        break;
    }
    else{
        document.write('We are sorry ' + item + 'is not available in our bakery!');
        break
    }
}

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
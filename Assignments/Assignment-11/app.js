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

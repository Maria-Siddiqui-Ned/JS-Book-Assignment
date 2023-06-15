// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var number = +prompt('Enter a positive integer: ');
document.write("<h3>Task 1</h3>")
if( number > 0){
        document.write("Number : "+ number +"<br>");
        document.write("Round of value : "+ Math.round(number)  +"<br>");
        document.write("Floor value : "+ Math.floor(number) +"<br>");
        document.write("Ceil value : "+ Math.ceil(number) +"<br>" + "<br>");
}
else{
    alert("Please enter a positive integer")
    document.write("Sorry!! You entered invalid number <br>");

}

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
document.write("<h3>Task 2</h3>")
var nfpn = +prompt('Enter a negative floating point number: ');
if( nfpn < 0){
        document.write("Number : "+ nfpn +"<br>");
        document.write("Round of value : "+ Math.round(nfpn)  +"<br>");
        document.write("Floor value : "+ Math.floor(nfpn) +"<br>");
        document.write("Ceil value : "+ Math.ceil(nfpn) +"<br>" + "<br>");
}
else{
    alert("Please enter a negative floating point number:")
    document.write("Sorry!! You entered invalid number <br>");
}

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
document.write("<h3>Task 3</h3>")
var absolute_number = +prompt('Enter a number to displays its absolute value: ');
document.write('The absolute value of ' + absolute_number + ' is ' + Math.abs(absolute_number) + '<br>' + '<br>' );
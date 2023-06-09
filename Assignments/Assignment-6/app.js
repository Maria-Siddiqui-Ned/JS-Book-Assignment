// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
document.write("<h3>Task 1</h3>")
var a = prompt('Enter a number : ');
document.write("Result:" + '</br>');
document.write('The value of a is : ' + a + '</br>');
document.write('-------------------------------------------' + '</br>');
document.write('The value of ++a is : ' , ++a,'</br>');
document.write('Now The value of a is : ' + a + '</br>');
document.write('</br>The value of a++ is : ' , a++,'</br>');
document.write('Now The value of a is : ' + a + '</br>');
document.write('</br>The value of --a is : ' , --a , '</br>' );
document.write('Now The value of a is : ' + a + '</br>');
document.write('</br>The value of a-- is : ' , a-- , '</br>' );
document.write('Now The value of a is : ' + a + '</br>');

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
document.write("<h3>Task 2</h3>")
var a =2;
var b = 1;
var result = (--a )-(--b) + (++b) + (b--);

result = --a;
document.write('Result for --a is : ' + result + '</br></br>');

result = result - (--b)
document.write('Result for (--a) -  (--b) is : ' + result + '</br></br>');

result = result + (++b)
document.write('Result for (--a) - (--b) + (++b) is : ' + result + '</br></br>');

result = result + (b--)
document.write('Result for (--a) - (--b) + (++b) + (b--) is : ' + result + '</br></br>');

document.write('Now a is : ' + a + '</br>');
document.write('Now b is : ' + b + '</br>');
document.write('Result is : ' + result + '</br>' + '</br>');

// 3. Write a program that takes input a name from user & greet the user.
var name_for_greet = prompt('Enter your name : ');
 alert('Welcome ' + name_for_greet + ' to my website!!');

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5 should be displayed by default.
document.write("<h3>Task 5</h3>")
var table = +prompt('Enter a number to generate multiplication table: ');

for (i = 1; i<=12; i++){
    if (table == "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" ){
        document.write(table + " x " + i + " = " + table * i + '</br>');        
    }
    else {
        document.write('5' + " x " + i + " = " + 5*i + '</br>');
    }
}
document.write('</br>');

// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
document.write("<h3>Task 6</h3>")
var sub1 = prompt('Enter subject 1  name : ');
var sub2 = prompt('Enter subject 2  name : ');
var sub3 = prompt('Enter subject 3  name : ');
var total_marks = 100;
var marks_sub1 = +prompt('Enter obtained marks in subject 1 : ');
var marks_sub2 = +prompt('Enter obtained marks in subject 2 : ');
var marks_sub3 = +prompt('Enter obtained marks in subject 3 : ');
var total_marks_all = 300;
var Obtained_total_marks = marks_sub1 + marks_sub2 + marks_sub3;
var percentage = (Obtained_total_marks / total_marks_all) * 100;
var perc_sub1 = ((marks_sub1/total_marks) * 100);
var perc_sub2 = ((marks_sub2/total_marks) * 100);
var perc_sub3 = ((marks_sub3/total_marks) * 100);
document.write("<table  style='text-align: center;  padding: 2px;'><tr><td><b>Subject</b></td><td><b>Total Marks</b></td><td><b>Obtained Marks</b></td><td><b>Percentage</b></td></tr><tr><td>" + sub1 + " </td><td>" + total_marks + "</td><td>" + marks_sub1 + "</td><td>" + perc_sub1 + " %</td></tr><tr><td>" + sub1 + " </td><td>" + total_marks + "</td><td>" + marks_sub2 + "</td><td>" + perc_sub2 + "% </td></tr><tr><td>" + sub1 + " </td><td>" + total_marks + "</td><td>" + marks_sub3 + "</td><td>" + perc_sub3 + " %</td></tr><tr><td></td><td><b>" + total_marks_all + "</b></td><td><b>" + Obtained_total_marks + "</b></td><td><b>" + percentage + " %</b></td></tr></table>");

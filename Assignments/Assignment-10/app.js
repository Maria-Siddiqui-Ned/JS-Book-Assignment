// 1. Declare and initialize an empty multidimensional array. (Array of arrays)


// 2. Declare and initialize a multidimensional array representing the following matrix:
var multidimensional_arrayr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write("<h3>Task 2</h3>")
for (var i=0 ; i < multidimensional_arrayr.length ; i++){
    document.write(multidimensional_arrayr[i].join(' ') + '<br>');
}

// 3. Write a program to print numeric counting from 1 to 10.
document.write("<h3>Task 3</h3>")
for(var i = 1; i < 11; i++){
    document.write(i + '<br>');
}
document.write('<br>' + '<br>');

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var multiplication_table = prompt('Enter a number to show its multiplication table : ');
var multiplication_table_length = prompt('Enter te length of multiplication table : ');
document.write("<h3>Task 4</h3>")
document.write("Multiplication Table of:>" +  multiplication_table + '</br>');
document.write('Length : ' + multiplication_table_length + '<br>');

for(z = 0; z <= multiplication_table_length ; z++){
    document.write(multiplication_table + ' x ' + z + ' = ' + multiplication_table * z + '<br>');
}
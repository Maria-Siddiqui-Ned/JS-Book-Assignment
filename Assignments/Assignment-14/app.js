// 1. Write a function that displays current date & time in your browser.
function Date_and_Time()
    {
        var d = new Date();
        document.write("<h3>Task 1</h3>")
        return document.write(d + '<br>');
    }
Date_and_Time();

// 2. Write a function that takes first & last name and then it greets the user using his full name.
function greet_message()
    {
        var firstName = prompt('Enter your first name : ');
        var lastName = prompt('Enter your last name : ');
        var fullName = firstName + ' ' + lastName;
        alert('Welcome ' + fullName);
    }
greet_message();

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function add()
{
    var  num1 = +prompt('Enter first number for sum : ');
    var num2 = +prompt('Enter second number for sum : ');
    var sum = num1 +  num2;
    alert("Sum is " + sum );
}
add()
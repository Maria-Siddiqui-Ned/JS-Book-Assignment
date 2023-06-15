// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
var a = +prompt("Enter the base to calculate the value of a raised to b : ");
var b = +prompt("Enter the power to calculate the value of a raised to b : ");

function power(a,b)
{
    return a**b;
}
p = power(a,b);
alert("Power is " + p);

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
var x = +prompt("Enter year to determine whether the year is a leap year or not : ");

function leapYear(x)
{
    if (x%4===0){
            alert(x + " is leap year");
        }
    else
    {
        alert(x + " is not a leap year");
    }
}
leapYear(x);

// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2  Calculate area of triangle using 2 functions

var a = +prompt("Enter length of side a of a triangle: ");
var b = +prompt("Enter length of side b of a triangle: ");
var c = +prompt("Enter length of side c of a triangle: ");
var S = 0;
function s(a,b,c)
{
    S = (a + b + c)/2;
    return S;
}
s(a,b,c);

function area(S,a,b,c)
{
    alert("Area of triangle is " + (S * (S-a) * (S-b) * (S-c)) + " units");
}
area(S,a,b,c);

// 1. Write a program that displays current date and time in your browser.
var date = new Date();
document.write("<h3>Task 1</h3>")
document.write(date + '<br>' + '<br>');

// 2. Write a program that alerts the current month in words. For example December.
var date = new Date();
var current_month = date.getMonth();
document.write("<h3>Task 2</h3>")
switch(current_month) {
    case 0 :
    document.write("Current month: JANUARY");
    break;
    case 1 :
    document.write("Current month: FEBRUARY");
    break;
    case 2 :
    document.write("Current month: MARCH");
    break;
    case 3 :
    document.write("Current month: APRIL");
    break;
    case 4 :
    document.write("Current month: MAY");
    break;
    case 5 :
    document.write("Current month: JUNE");
    break;
    case 6 :
    document.write("Current month: JULY");
    break;
    case 7 :
    document.write("Current month: AUGUST");
    break;
    case 8 :
    document.write("Current month: SEPTEMBER");
    break;
    case 9 :
    document.write("Current month: OCTOBER");
    break;
    case 10 :
    document.write("Current month: NOVEMBER");
    break;
    case 11 :
    document.write("Current month: DECEMBER");
    break;
}

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
var d = new Date();
var Day = d.toString();
document.write("<h3>Task 3</h3>")
Day1 = Day.slice(0,3) ;
document.write('Today is '+ Day1+ '<br>' + '<br>');
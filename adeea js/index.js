function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = "AM";


  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
    ampm = "PM";
  }

  
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  let time = hours + ":" + minutes + ":" + seconds + " " + ampm;

  document.getElementById("clock").textContent = time;

  setTimeout(showTime, 1000);
}

function addZero(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}


showTime();


var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; 
var day = currentDate.getDate();
var formattedDate = day + "/" + month + "/" + year;
document.write("Current Date: " + formattedDate+'<br>');


//question no 2
var currentDate = new Date();

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];


var currentMonthIndex = currentDate.getMonth();


var currentMonth = monthNames[currentMonthIndex];


alert("The current month is: " + currentMonth);

//question no3

var currentDate = new Date();


var dayNames = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

var currentDayIndex = currentDate.getDay();


var currentDayAbbreviation = dayNames[currentDayIndex];


alert("The current day is: " + currentDayAbbreviation);

//que no4

 
var currentDate = new Date();


var currentDayIndex = currentDate.getDay();


if (currentDayIndex === 6 || currentDayIndex === 0) {
  alert("It's Fun day");
} else {
  alert("It's not Fun day its working day");
}

//question no 5

var currentDate = new Date();


var currentDay = currentDate.getDate();


if (currentDay < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}


//que no 6


var currentTime = new Date().getTime();

var minutesSinceMidnight = Math.floor(currentTime / (1000 * 60));

document.write("Minutes since midnight, 1 jan 1970 :", minutesSinceMidnight +'<br>');

//que no 7

var now = new Date();

var hour = now.getHours();
if (hour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}
//que no 8
var laterDate = new Date(2023, 11, 31);

document.write(laterDate +'<br>');
//que  no 9

var startingDate = new Date(2015, 5, 18);


var currentDate = new Date();


var timeDiff = currentDate.getTime() - startingDate.getTime();


var  daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


alert("Number of days passed since 1st Ramadan 2015: " + daysPassed );

//que no 10


var referenceDate = new Date(); 

var beginningOf2015 = new Date(2015, 0, 1); 

var timeDiff = referenceDate.getTime() - beginningOf2015.getTime();

var secondsElapsed = Math.floor(timeDiff / 1000);

document.write("Seconds elapsed since the beginning of 2015: " + secondsElapsed +'<br>');

//queno 11
var currentDate = new Date();
document.write( " current date "+currentDate+'<br>');

var currentDate = new Date();

var currentHours = currentDate.getHours();

currentDate.setHours(currentHours + 1);

document.write("1 hour ago it was"+currentDate +'<br>');

//que no 12


var currentDate = new Date();

currentDate.setFullYear(currentDate.getFullYear() - 100);

alert(currentDate);
//que no 13
var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear+"<br>");

//que no 14

// Customer details
var customerName = "adeea";
var currentMonth = "May";

// Electricity consumption details
var numberOfUnits = 250;
var chargesPerUnit = 15.5;

// Bill calculation
var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var latePaymentSurcharge = (netAmountPayable * 0.05).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

// Display the bill in the browser
document.write("<h2>K-Electric Bill</h2>");
document.write("<b>Customer Name:</b> " + customerName + "<br>");
document.write("<b>Current Month:</b> " + currentMonth + "<br>");
document.write("<b>Number of Units:</b> " + numberOfUnits + "<br>");
document.write("<b>Charges per Unit:</b> " + chargesPerUnit.toFixed(2) + "<br>");
document.write("<b>Net Amount Payable (within Due Date):</b> " + netAmountPayable + "<br>");
document.write("<b>Late Payment Surcharge:</b> " + latePaymentSurcharge + "<br>");
document.write("<b>Gross Amount Payable (after Due Date):</b> " + grossAmountPayable + "<br>");

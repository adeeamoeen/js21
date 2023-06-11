
//quue1

function power(a, b) {
    return Math.pow(a, b);
  }
  var result = power(2, 3);
  console.log(result); 
    
  //que no 2

  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
        return true;
      }
    }
    return false;
  }
  var year = parseInt(prompt("Enter a year:"));

  if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
//que no 3

function calculateS(a, b, c) {
    return (a + b + c) / 2;
  }
  
  function calculateTriangleArea(a, b, c) {
    var h = calculateS(a, b, c);
    var area = Math.sqrt( h* (h - a) * (h - b) * (h - c));
    return area;
  }
  var sideA = 8;
var sideB = 7;
var sideC = 6;

var area = calculateTriangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + area);

//que no 4
function calculateAverage(mark1, mark2, mark3) {
    var sum = mark1 + mark2 + mark3;
    var average = sum / 3;
    return average;
  }
  
  function calculatePercentage(mark1, mark2, mark3) {
    var totalMarks = 300; 
    var obtainedMarks = mark1 + mark2 + mark3;
    var percentage = (obtainedMarks / totalMarks) * 100;
    return percentage;
  }
  
  function mainFunction(mark1, mark2, mark3) {
    var average = calculateAverage(mark1, mark2, mark3);
    var percentage = calculatePercentage(mark1, mark2, mark3);
  
    console.log("Average marks: " + average);
    console.log("Percentage: " + percentage + "%");
  }
  
  var subject1 = 80;
var subject2 = 75;
var subject3 = 90;

mainFunction(subject1, subject2, subject3);
//que no 5
function customIndexOf(string, searchChar) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === searchChar) {
        return i;
      }
    }
    return -1;
  }
  var text = "wellcome,mam!";
  var searchChar = "m";
  
  var index = customIndexOf(text, searchChar);
  console.log("Index of '" + searchChar + "' in the text: " + index);
    //que no 6

    function removeVowels(sentence) {
        var vowels = ["a", "e", "i", "o", "u"];
        var result = "";
      
        for (var i = 0; i < sentence.length; i++) {
          var char = sentence[i].toLowerCase();
      
          if (!vowels.includes(char)) {
            result += sentence[i];
          }
        }
      
        return result;
      }
      var sentence = "Information technology (IT) is the use of any computers, storage, networking and  secure and exchange all forms of electronic data. Typically.";

      var result = removeVowels(sentence);
      console.log("Sentence without vowels: " + result);
        
      //que no 7

      function countSuccessiveVowels(text) {
        var count = 0;
        var vowels = "aeiou";
      
        for (var i = 0; i < text.length - 1; i++) {
          var currentChar = text[i].toLowerCase();
          var nextChar = text[i + 1].toLowerCase();
      
          if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
            count++;
          }
        }
      
        return count;
      }
      var text = "The commercial use of IT encompasses both computer technology and telecommunications.";

      var count = countSuccessiveVowels(text);
      console.log("Occurrences of two successive vowels: " + count);
      //que no 8

      function convertToMeters(distanceInKm) {
        return distanceInKm * 1000;
      }
      
      function convertToFeet(distanceInKm) {
        return distanceInKm * 3280.84;
      }
      
      function convertToInches(distanceInKm) {
        return distanceInKm * 39370.1;
      }
      
      function convertToCentimeters(distanceInKm) {
        return distanceInKm * 100000;
      }
      
      function printDistances(distanceInKm) {
        var meters = convertToMeters(distanceInKm);
        var feet = convertToFeet(distanceInKm);
        var inches = convertToInches(distanceInKm);
        var centimeters = convertToCentimeters(distanceInKm);
      
        console.log("Distance in meters: " + meters);
        console.log("Distance in feet: " + feet);
        console.log("Distance in inches: " + inches);
        console.log("Distance in centimeters: " + centimeters);
      }
      
      var distanceInKm = parseFloat(prompt("Enter the distance between two cities (in km):"));
      printDistances(distanceInKm);

      // que no 9

      function calculateOvertimePay(hoursWorked) {
        var regularHours = 40;
        var overtimeRate = 12.00;
      
        if (hoursWorked <= regularHours) {
          return 0;
        } else {
          var overtimeHours = hoursWorked - regularHours;
          var overtimePay = overtimeHours * overtimeRate;
          return overtimePay;
        }
      }
      
      var hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
      var overtimePay = calculateOvertimePay(hoursWorked);
      console.log("Overtime pay: Rs. " + overtimePay.toFixed(2));

      //que no 10
      function calculateCurrencyNotes(amountInHundreds) {
        var denomination100 = 100;
        var denomination50 = 50;
        var denomination10 = 10;
      
        var notes100 = Math.floor(amountInHundreds);
        var remainingAmount = amountInHundreds - notes100;
      
        var notes50 = Math.floor(remainingAmount / (denomination50 / denomination100));
        remainingAmount = remainingAmount % (denomination50 / denomination100);
      
        var notes10 = Math.floor(remainingAmount / (denomination10 / denomination100));
      
        return {
          notes100: notes100,
          notes50: notes50,
          notes10: notes10
        };
      }
      
      var amountInHundreds = parseFloat(prompt("Enter the amount to be withdrawn (in hundreds):"));
      var currencyNotes = calculateCurrencyNotes(amountInHundreds);
      console.log("Number of 100 rupee notes: " + currencyNotes.notes100);
      console.log("Number of 50 rupee notes: " + currencyNotes.notes50);
      console.log("Number of 10 rupee notes: " + currencyNotes.notes10);
      
      
            
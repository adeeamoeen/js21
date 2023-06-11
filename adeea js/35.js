
//que no 1
function greetUser(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
 
  console.log('Hello, ' + fullName + '! Welcome!');
}

//que2
greetUser('adeea', 'moeen'); 

function addNumbers() {
  var number1 = parseFloat(prompt("Enter the first number:"));
  var number2 = parseFloat(prompt("Enter the second number:"));
  var sum = number1 + number2;
  return sum;
}
var result = addNumbers();
console.log("The sum is: " + result);

//queno3
function computeOperation(num1, num2, operator) {
  var result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return "Invalid operator";
  }

  return result;
}
var num1 = 14;
var num2 = 6;
var operator = "+";

var result = computeOperation(num1, num2, operator);
document.write("The result is: " + result +'</br>');
//que no5
function square(num) {
  var result = num * num;
  return result;
}
var number = 7;
var squaredValue = square(number);
console.log("The square of " + number + " is: " + squaredValue);
//que no 6
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
var number = 8;
var factorialValue = factorial(number);
console.log("The factorial of " + number + " is: " + factorialValue);

//queno 7
function countNumbers(start, end) {
  var count = "";

  if (start <= end) {
    for (var i = start; i <= end; i++) {
      count += i + " ";
    }
  } else {
    for (var j = start; j >= end; j--) {
      count += j + " ";
    }
  }

  document.write("Counting: " + count);
}
countNumbers(1, 20);

//queno8

function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }

  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);
  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);

  return hypotenuse;
}
var base = 5;
var perpendicular = 6;
var hypotenuse = calculateHypotenuse(base, perpendicular);

console.log("The hypotenuse is: " + hypotenuse);
//queno 9

function calculateRectangleAreaWithValue(width, height) {
  var area = width * height;
  return area;
}

function calculateRectangleAreaWithVariables(width, height) {
  var area = width * height;
  return area;
}

var areaWithValue = calculateRectangleAreaWithValue(10, 15);
console.log("Area (arguments as value): " + areaWithValue);

var width = 10;
var height = 15;
var areaWithVariables = calculateRectangleAreaWithVariables(width, height);
console.log("Area (arguments as variables): " + areaWithVariables);
 //que no 10
 function isPalindrome(str) {
 
  var formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  var reversedStr = formattedStr.split('').reverse().join('');

  if (formattedStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}
var string = "principle";
var isPalindromeResult = isPalindrome(string);

if (isPalindromeResult) {
  console.log(string + " is a palindrome.");
} else {
  console.log(string + " is not a palindrome.");
}

//que no 11
function capitalizeWords(str) {
  var words = str.split(" ");
  var capitalizedWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  }

  var result = capitalizedWords.join(" ");
  return result;
}
var sentence = "saylani welfare";
var capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);

//queno12
function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = "";

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
var sentence = "app developer";
var longestWord = findLongestWord(sentence);
console.log(longestWord);

//queno 13

function countOccurrences(str, letter) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      count++;
    }
  }

  return count;
}
var str = "netlify.app";
var letter = "i";
var occurrences = countOccurrences(str, letter);
console.log("Number of occurrences of '" + letter + "' in '" + str + "': " + occurrences);

//que no 14
// Function to calculate the circumference of a circle
function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference);
}

// Function to calculate the area of a circle
function calcArea(radius) {
  var area = Math.PI * radius * radius;
  console.log("The area is " + area);
}
var radius = 5

calcCircumference(radius);
calcArea(radius);

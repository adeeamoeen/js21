//queno 1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Asalam o Alikum, " + fullName + "! Welcome!");
//que no 2
function displayLength() {
    var userInput = document.getElementById("phoneModel").value;
    var length = userInput.length;
    document.getElementById("lengthDisplay").innerHTML = " length of string: " + length;
}
//que no 3
function findIndex() {
    var word = "Pakistani";
    var index = word.indexOf("n");
    document.getElementById("indexDisplay").innerHTML = "Index of 'n': " + index;
}
//que no 4
function findLastIndex() {
    var word = "information technology";
    var lastIndex = word.lastIndexOf("g");
    document.getElementById("lastIndexDisplay").innerHTML = "Last Index of 'g': " + lastIndex;}
    //que no 5
    function findCharacter() {
        var word = "saylani welfare";
        var character = word.charAt(3);
        document.getElementById("characterDisplay").innerHTML = "Character at 3rd Index: " + character;
    }
    //que no 6
    var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ", lastName);
alert("Asalam o Alikum, " + fullName + "! Welcome!");
//que no 7
function replaceSubstring() {
    var word = "Hyderabad";
    var replacedWord = word.replace("Hyder", "Islam");
    document.getElementById("resultDisplay").innerHTML = "Result: " + replacedWord;
}
//que no 8
function replaceOccurrences() {
    var message = "iqra and adeea are best friends. They play cricket and football together.";
    var replacedMessage = message.replace(/and/g, "&");
    document.getElementById("replaceDisplay").innerHTML = "Result: " + replacedMessage;
}
//que no 9
function convertStringToNumber() {
    var stringNumber = "472";
    var convertedNumber = parseInt(stringNumber);

    var result = "Value: " + convertedNumber + "<br>";
    result += "Type: " + typeof convertedNumber;

    document.getElementById("convertDisplay").innerHTML = result;
}
//que no 10
function convertToUppercase() {
    var userInput = document.getElementById("userInput").value;
    var convertedText = userInput.toUpperCase();
    document.getElementById("toupperDisplay").innerHTML = "Converted Text: " + convertedText;
}
//que no 11

function convertToTitleCase() {
    var userInput = document.getElementById("userInput").value;
    var convertedText = toTitleCase(userInput);
    document.getElementById("totitleDisplay").innerHTML = "Converted Text: " + convertedText;
}

function toTitleCase(text) {
    return text.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
//que no 12
function convertAndRemoveDot() {
    var num = 35.36;
    var numAsString = num.toString();
    var result = numAsString.replace(".", "");
    document.getElementById("dotDisplay").innerHTML = "Result: " + result;
}
//que no 13
function validateUsername() {
    var username = prompt("Enter your username:");
    var isValid = true;

    if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
        isValid = false;
    }

    if (!isValid) {
        alert("Please enter a valid username without special symbols [@ . , !]");
        validateUsername(); 
    } else {
        alert("Username is valid: " + username);
    }
}
//que no 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem() {
    var userInput = prompt("Enter an item to search:");
    var isFound = false;

    for (var i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === userInput.toLowerCase()) {
            isFound = true;
            break;
        }
    }

    if (isFound) {
        alert("Item '" + userInput + "' is found in the list.");
    } else {
        alert("Item '" + userInput + "' is not found in the list.");
    }
}
//que no 15
function validatePassword() {
    var password = prompt("Enter your password:");
    var isValid = true;

    if (!password.match(/[a-zA-Z]/) || !password.match(/[0-9]/)) {
        isValid = false;
    }

    if (password.match(/^[0-9]/) || password.length < 6) {
        isValid = false;
    }

    if (!isValid) {
        alert("Please enter a valid password that meets the requirements:\n- It should contain both alphabets and numbers.\n- It should not start with a number.\n- It must be at least 6 characters long.");
        validatePassword(); 
    } else {
        alert("Password is valid.");
    }
}
//que no 16
var university = "University of Karachi";

        function convertToArray() {
            var array = university.split(" ");
            document.getElementById("arrayDisplay").innerHTML = "Array: " + array;
        }
        //que no 17
        function displayLastCharacter() {
            var userInput = prompt("Enter a text:");
            var lastCharacter = userInput.charAt(userInput.length - 1);
            alert("Last character: " + lastCharacter);
        }

     //chap 26 to 30
        //que no 1
    

        function displayNumberOperations() {
            var userInput = parseInt(prompt("Enter positive integer:"));
            var number = userInput;
            var roundedValue = Math.round(userInput);
            var floorValue = Math.floor(userInput);
            var ceilValue = Math.ceil(userInput);

            var output = "Number: " + number + "<br>" +
                         "Rounded-off value: " + roundedValue + "<br>" +
                         "Floor value: " + floorValue + "<br>" +
                         "Ceiling value: " + ceilValue;

            document.getElementById("numberDisplay").innerHTML = output;
        }
        //que no 18
        function countOccurrences() {
            var sentence = "The quick brown fox jumps over the lazy dog";
            var word = "the";
            var regex = new RegExp("\\b" + word + "\\b", "gi");
            var count = (sentence.match(regex) || []).length;
            alert("Number of occurrences of '" + word + "': " + count);}
       
       

        //que no 3
        function displayAbsoluteValue() {
            var userInput = parseFloat(prompt("Enter a number:"));
            var absoluteValue = Math.abs(userInput);
            alert("Absolute value: " + absoluteValue);
        }
        //que no 2
        function displayNumberOperations() {
            var userInput = parseFloat(prompt("Enter a negative floating-point number:"));
            var number = userInput;
            var roundedValue = Math.round(userInput);
            var floorValue = Math.floor(userInput);
            var ceilValue = Math.ceil(userInput);

            var output = "Number: " + number + "<br>" +
                         "Rounded-off value: " + roundedValue + "<br>" +
                         "Floor value: " + floorValue + "<br>" +
                         "Ceiling value: " + ceilValue;

            document.getElementById("negdisplay").innerHTML = output;
        }
        //que no 4
        function rollDice() {
            var diceValue = Math.floor(Math.random() * 12) + 1;
            document.getElementById("diceDisplay").innerHTML = "Dice Value: " + diceValue;
        }
        //que no 5
        function tossCoin() {
            var coinValue = Math.random() < 0.5 ? "Heads" : "Tails";
            document.getElementById("coinDisplay").innerHTML = "Coin Value: " + coinValue;
        }
        //que no 6
        function generateRandomNumber() {
            var randomNumber = Math.floor(Math.random() * 100) + 1;
            document.getElementById("randomNumberDisplay").innerHTML = "Random Number: " + randomNumber;
        }
        //que no 7
        function displayWeight() {
            var userInput = prompt("Enter your weight:");
            var weight = parseFloat(userInput);
            
            if (!isNaN(weight)) {
                document.getElementById("weightDisplay").innerHTML = "Weight: " + weight + " kgs";
            } else {
                var regex = /^(\d+(\.\d+)?)\s*(kgs?|kilograms?)$/i;
                var match = userInput.match(regex);
                
                if (match) {
                    weight = parseFloat(match[1]);
                    document.getElementById("weightDisplay").innerHTML = "Weight: " + weight + " kgs";
                } else {
                    document.getElementById("weightDisplay").innerHTML = "Invalid input";
                }
            }
        }
        //que no 8
        function guessNumber() {
            var secretNumber = Math.floor(Math.random() * 10) + 1;
            var userInput = parseInt(prompt("Guess the number (between 1 and 10):"));

            if (userInput === secretNumber) {
                alert("Congratulations! You guessed the correct number.");
            } else {
                alert("Wrong guess. Try again!");
            }
        }
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // prompt for password length --> stored in a variable
  generateBtn.addEventListener("click", passwordLength);

  function passwordLength() {
    passwordLength = prompt('Please input the desired length (8 - 128 characters) of your password.', "12");
    if (passwordLength < 8 || passwordLength > 128) {
      document.getElementById("generate").innerHTML = "Please choose a valid password length of 8 - 128 characters.";
    }
    else {
      document.getElementById("generate").innerHTML = "Your password will be" + passwordLength + " characters long.";
    }
  }


  function lowLetters() {
    var lowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (confirm("Would you like your password to include lowercase letters?") == true) {
      prompt("",)
      // DO include lowLetters in variable set
    };
    else {
      // DO NOT include lowLetters in variable set
    }
  }

  function capLetters() {
    var capLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    if (confirm("Would you like your password to include UPPERCASE letters?") == true) {
      prompt("",)
      // DO include capLetters in variable set
    };
    else {
      // DO NOT include capLetters in variable set
    }
  }

  function numbers() {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (confirm("Would you like your password to include numbers?") == true) {
      prompt("",)
      // DO include numbers in variable set
    };
    else {
      // DO NOT include numbers in variable set
    }
  }

  function specialChar() {
    var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '=', '/', '.', ':', ';', '?'];

    if (confirm("Would you like your password to include special characters?") == true) {
      prompt("",)
      // DO include special characters in variable set
    };
    else {
      // DO NOT include special characters in variable set
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
var password = "";
var passwordLength = '';

// for (var i = 0; 8 < passwordLength < 129; i++) {

function generatePassword() {

  // Need the following variables:
  // selected length of the password
  // array of lowercase letters
  // array of uppercase letters
  // array of numbers
  // array of special characters
  // to hold the password we're building
  // possibly the mega-array

  // prompt for password length --> stored in a variable
  // validate the user input --> if user chooses <8 or >128, alert that they need to choose a valid password length, then they're going to need to restart OR call the function that prompts for length again
  // prompt --> Do they want uppercase letters?
  // prompt --> Do they want lowercase letters?
  // prompt --> Do they want numbers?
  // prompt --> Do they want special characters?

  // Validate that the user has chosen at least one character set --> If not, either have them start over OR recursively call the function that prompts for the character sets
  // With each of those prompts, you need an array of those character types
  // There needs to be at least one of each selected character type included in the password
  // Randomly generate a character from each character set as it's chosen and add it to the end of the password that you're building (.push() for an array or .concat() for a string)

  // for loop:
  // for (var i = ???; i < passwordLength; i++)
  // EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from
  // IF keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will be array[number])
  // IF pushing to a mega-array, randomly generate a number to pull a character from the array
  //*** */ IF pushing to a mega-array, remember to set the array back to an empty array at the start of the process!***
  // return the generated password 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // WRITE THE CODE TO RETURN THIS OUTPUT | RANDOMLY CREATE CHARACTERS AND BRING THEM BACK TOGETHER AS A STRING --> GO THRU ACCEPTANCE CRITERIA AND PSEUDO CODE IT OUT  
  return userPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and / or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
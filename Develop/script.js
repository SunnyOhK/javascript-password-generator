// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible character types based on user input
var passwordLength = '';
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '=', '/', '.', ':', ';', '?', '_', ',', ''];
var password = '';

function generatePassword() {

  function setPasswordLength() {
    passwordLength = window.prompt('Please select the length for your password (between 8 and 128 characters).');
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert('Please choose a valid password length of 8 - 128 characters.');
      generatePassword();
    } else {
      window.alert('Your password will be" + passwordLength + " characters long');
    }
  }

  function includeUppercase() {
    uppercase = window.confirm('Would you like to include uppercase letters in your password? Select OK for yes or CANCEL for no.');
    if (uppercase) {
      includeUppercase = true;
    } else {
      window.alert('Your password will not include uppercase letters.');
      includeUppercase = false;
    };
  };

  function includeLowercase() {
    lowercase = window.confirm('Would you like to include lowercase letters in your password? Select OK for yes or CANCEL for no.');
    if (lowercase) {
      includeLowercase = true;
    } else {
      window.alert('Your password will not include lowercase letters.');
      includeLowercase = false;
    };
  };

  function includeNumbers() {
    numbers = window.confirm('Would you like to include numbers in your password? Select OK for yes or CANCEL for no.');
    if (numbers) {
      includeNumbers = true;
    } else {
      window.alert('Your password will not include numbers.');
      includeNumbers = false;
    };
  };

  function includeSpecialChar() {
    specialChar = window.confirm('Would you like to include special characters in your password? Select OK for yes or CANCEL for no.');
    if (specialChar) {
      includeSpecialChar = true;
    } else {
      window.alert('Your password will not include lowercase letters.');
      includeSpecialChar = false;
    };
  };
};
// WRITE THE CODE TO RETURN THIS OUTPUT | RANDOMLY CREATE CHARACTERS AND BRING THEM BACK TOGETHER AS A STRING

function returnPassword() {
  var pwCharSet = "i";
  if (includeUppercase === true) {
    pwCharSet = uppercase;
  }

  if (includeLowercase === true) {
    pwCharSet = pwCharSet + lowercase;
  }

  if (includeNumbers === true) {
    pwCharSet = pwCharSet + numbers;
  }

  if (includeSpecialChar === true) {
    pwCharSet = pwCharSet + specialChar;
  }

  password = pwCharSet[Math.floor(Math.random() * pwCharSet.passwordLength)];
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(window);
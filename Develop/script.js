// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible character types based on user input
var passwordLength = '';
var lowercase = false;
var uppercase = false;
var numbers = false;
var specialChar = false;

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
      includeUppercase();
    } else {
      window.alert('Your password will not include uppercase letters.');
    };
  };

  function includeLowercase() {
    lowercase = window.confirm('Would you like to include lowercase letters in your password? Select OK for yes or CANCEL for no.');
    if (lowercase) {
      includeUppercase();
    } else {
      window.alert('Your password will not include lowercase letters.');
    };
  };

  function includeNumbers() {
    numbers = window.confirm('Would you like to include numbers in your password? Select OK for yes or CANCEL for no.');
    if (numbers) {
      includeNumbers();
    } else {
      window.alert('Your password will not include numbers.');
    };
  };

  function includeSpecialChar() {
    specialChar = window.confirm('Would you like to include special characters in your password? Select OK for yes or CANCEL for no.');
    if (specialChar) {
      includeSpecialChar();
    } else {
      window.alert('Your password will not include lowercase letters.');
    };
  };

  // WRITE THE CODE TO RETURN THIS OUTPUT | RANDOMLY CREATE CHARACTERS AND BRING THEM BACK TOGETHER AS A STRING --> GO THRU ACCEPTANCE CRITERIA AND PSEUDO CODE IT OUT  
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
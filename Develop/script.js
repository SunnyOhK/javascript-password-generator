// Assignment Code
var generateBtn = document.querySelector("#generate");

// Steps to complete this project:
// 1. Prompt for criteria (length and character sets)
// 2. Validate user inputs
// 3. Generate and display password for user

// Possible character types based on user input
var length = 0;
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '=', '/', '.', ':', ';', '?', '_', ',', ''];
var megaArray = [];

function generatePassword() {
  console.log("ding!");

  window.confirm('Welcome to the password generator! Please click "OK" to continue or "Cancel" to exit.');
  if (window.confirm("Great! Let's get started.") == true) {
    setLength();
  } else if (window.confirm("You have exited the password generator.")) {
    return;
  }

  function setLength() {
    var length = prompt('Please select the length for your password (between 8 and 128 characters).');
    if (length < 8 || length > 128) {
      window.alert('Please choose a valid password length of 8 - 128 characters.');
      setLength();
    } else {
      window.alert('Your password will be ' + length + ' characters long.');
      includeUppercase();
    }
  }

  function includeUppercase() {
    includeUppercase = window.confirm('Would you like to include uppercase letters in your password?');
    if (uppercase) {
      includeUppercase = true;
      window.alert('Your password WILL include uppercase letters.');
    } else {
      window.alert('Your password WILL NOT include uppercase letters.');
      includeUppercase = false;
    };
    includeLowercase();
  };

  function includeLowercase() {
    includeLowercase = window.confirm('Would you like to include lowercase letters in your password?');
    if (lowercase) {
      includeLowercase = true;
      window.alert('Your password WILL include lowercase letters.');

    } else {
      window.alert('Your password WILL NOT include lowercase letters.');
      includeLowercase = false;
    };
    includeNumbers();
  };

  function includeNumbers() {
    includeNumbers = window.confirm('Would you like to include numbers in your password?');
    if (numbers) {
      includeNumbers = true;
      window.alert('Your password WILL include numbers.');

    } else {
      window.alert('Your password WILL NOT include numbers.');
      includeNumbers = false;
    };
    includeSymbols();
  };

  function includeSymbols() {
    includeSymbols = window.confirm('Would you like to include special characters/ symbols in your password?');
    if (symbols) {
      includeSymbols = true;
      window.alert('Your password WILL include special characters/symbols.');

    } else {
      window.alert('Your password WILL NOT include special characters/symbols.');
      includeSymbols = false;
    }
    var firstPassword = createPassword();
      };
      
   // WRITE THE CODE TO RETURN THIS OUTPUT | RANDOMLY CREATE CHARACTERS AND BRING THEM BACK TOGETHER AS A STRING
   return firstPassword;
};

  function createPassword() {
    window.alert('Working on it!');
    var passwordCharSet = "";
    var arr = [];

    if (includeUppercase) {
      megaArray.push(uppercase);
    }
  
    if (includeLowercase) {
      megaArray.push(lowercase);
    }

    if (includeNumbers) {
      megaArray.push(numbers);
    } 

    if (includeSymbols) {
      megaArray.push(symbols);
    } 

    for (var i = 0; i < length; i++) {
      arr.push(megaArray[Math.floor(Math.random() * megaArray.length)]);
    }; 

    passwordChar = arr.toString();
    return passwordChar;
  };

  // Write password to the #password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
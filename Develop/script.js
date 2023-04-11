// Assignment Code
var generateBtn = document.querySelector("#generate");

// Steps to complete this project:
// 1. Prompt for criteria (length and character sets)
// 2. Validate user inputs
// 3. Generate and display password for user

// Possible character types based on user input
var length;
var includeUppercase;
var includeLowercase;
var includeNumbers;
var includeSymbols;
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '=', '/', '.', ':', ';', '?', '_', ',', ''];
var megaArray = [];
var randPass = [];


function generatePassword() {

  window.alert('Welcome to the password generator! Please click "OK" to continue.');
  window.alert("Let's get started.");
  setLength();

  function setLength() {
    length = prompt('Please select the length for your password (between 8 and 128 characters).');
    if (length < 8 || length > 128) {
      window.alert('Please choose a valid password length of 8 - 128 characters.');
      setLength();
    } else {
      window.alert('Your password will be ' + length + ' characters long.');
      setIncludeUppercase();
    }
  };

  function setIncludeUppercase() {
    includeUppercase = window.confirm('Would you like to include uppercase letters in your password?');
    if (includeUppercase === true) {

      window.alert('Your password WILL include uppercase letters.');
    } else {
      window.alert('Your password WILL NOT include uppercase letters.');

    };
    setIncludeLowercase();
  };

  function setIncludeLowercase() {
    includeLowercase = window.confirm('Would you like to include lowercase letters in your password?');
    if (includeLowercase === true) {

      window.alert('Your password WILL include lowercase letters.');

    } else {
      window.alert('Your password WILL NOT include lowercase letters.');

    };
    setIncludeNumbers();
  };

  function setIncludeNumbers() {
    includeNumbers = window.confirm('Would you like to include numbers in your password?');
    if (includeNumbers === true) {

      window.alert('Your password WILL include numbers.');

    } else {
      window.alert('Your password WILL NOT include numbers.');

    };
    setIncludeSymbols();
  };

  function setIncludeSymbols() {
    includeSymbols = window.confirm('Would you like to include special characters/ symbols in your password?');
    if (includeSymbols === true) {

      window.alert('Your password WILL include special characters/symbols.');

    } else {
      window.alert('Your password WILL NOT include special characters/symbols.');

    }
    createPassword();
  };

  // Move to function of creating the password based on user input

  function createPassword() {
    // window.alert('Working on it!');
    // megaArray variable has been defined as an empty array; now I need to push the other variable arrays into this based on user input

    if (includeUppercase === true) {
      megaArray = uppercase;
    }

    if (includeLowercase === true) {
      megaArray = megaArray.concat(lowercase);
    }

    if (includeNumbers === true) {
      megaArray = megaArray.concat(numbers);
    }

    if (includeSymbols === true) {
      megaArray = megaArray.concat(symbols);
    }
    console.log(megaArray);

    for (var i = 0; i < length; i++) {
      var randCharIndex = Math.floor(Math.random() * megaArray.length);
      var randChar = megaArray[randCharIndex];
      randPass.push(randChar);
    };

    
  };

 return randPass.join("")
 
};

// WRITE THE CODE TO RETURN THIS OUTPUT | RANDOMLY CREATE CHARACTERS AND BRING THEM BACK TOGETHER AS A STRING



// Write password to the #password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
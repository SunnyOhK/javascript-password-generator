// Assignment Code
var generateBtn = document.querySelector("#generate");

// Steps to complete this project:
// 1. Prompt for criteria (length and character sets)
// 2. Validate user inputs
// 3. Generate and display password for user

function generatePassword() {
  console.log("ding!");

  // Possible character types based on user input
  var length = '';
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '=', '/', '.', ':', ';', '?', '_', ',', ''];

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
    uppercase = window.confirm('Would you like to include uppercase letters in your password?');
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
    lowercase = window.confirm('Would you like to include lowercase letters in your password?');
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
    numbers = window.confirm('Would you like to include numbers in your password?');
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
    symbols = window.confirm('Would you like to include special characters/ symbols in your password?');
    if (symbols) {
      includeSymbols = true;
      window.alert('Your password WILL include special characters/symbols.');

    } else {
      window.alert('Your password WILL NOT include special characters/symbols.');
      includeSymbols = false;
    }
    createPassword(window.alert('Working on it!'));
  };

  // WRITE THE CODE TO RETURN THIS OUTPUT | RANDOMLY CREATE CHARACTERS AND BRING THEM BACK TOGETHER AS A STRING
};

function createPassword() {
  var passwordCharSet = "";

  for (var i = 0; i < length; i++) {
    passwordCharSet = passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)];
  }
  //   if (includeUppercase === true && includeLowercase === true && includeNumbers === true && includeSymbols === true) {
  //     passwordCharSet = uppercase + lowercase + numbers + symbols;
  //   }

  //   else if {
  //     (includeUppercase === false && includeLowercase === true && includeNumbers === true && includeSymbols === true)
  //     passwordCharSet = lowercase + numbers + symbols;

  //   } 

  //   else if {
  //     (includeUppercase === true && includeLowercase === false && includeNumbers === true && includeSymbols === true)
  //     passwordCharSet = uppercase + numbers + symbols;
  //   } 

  //   else if {
  //     (includeUppercase === true && includeLowercase === true && includeNumbers === true && includeSymbols === true)
  //     passwordCharSet = ;
  // }

  if (includeUppercase === true) {
    passwordCharSet = uppercase;
  } else {
    passwordCharSet = !uppercase;
  }

  if (includeLowercase === true) {
    passwordCharSet = passwordCharSet + lowercase;
  } else {
    passwordCharSet = passwordCharSet + !lowercase;
  }

  if (includeNumbers === true) {
    passwordChar = passwordChar + numbers;
  } else {
    passwordChar = passwordChar + !numbers;
  }

  if (includeSymbols === true) {
    passwordChar = passwordChar + symbols;
  } else {
    passwordChar = passwordChar + !symbols;
  }

  writePassword();
};

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
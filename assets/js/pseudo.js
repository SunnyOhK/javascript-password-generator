// Assignment Code
    var generateBtn = document.querySelector("#generate");

    function generatePassword() {
    // Need the following variables:
        // selected length of the password
        // array of lowercase letters
        // array of uppercase letters
        // array of numbers
        // array of special characters
    
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





// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(pwdLength, useUppercase, useLowercase, useNumbers, useSpecial) {
  var randLowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var randUpCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var randDigit = '0123456789';
  var randSpecial = '!"#$%&\'()*+,-./:;<=>?@\\[]^_`{|}~';
  password = "";

  var randomChars = "";
  if (useUppercase) {
    randomChars += randUpCase;
  }
  if (useLowercase) {
    randomChars += randLowerCase;
  }
  if (useNumbers) {
    randomChars += randDigit; 
  }
  if (useSpecial) {
    randomChars += randSpecial; 
  }

  for(var i = 0; i < pwdLength; i++) {
    password += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  // Ask user for the length of password
  var promptLength = window.prompt('What is a lenght of your password from 8 to 128 characters?')
  // Conditional Recursive Function Call
  if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    return writePassword();
}
  // Ask user for the uppercase letters of password
  var promptUpCase = window.confirm('Do you want uppercase letters?')
  // Ask user for the lowercase letters of password
  var promptLowCase = window.confirm('Do you want lowercase letters?')
  // Ask user for the digits letters of password
  var promptDigits = window.confirm('Do you want digits?')
  // Ask user for the special symbols letters of password
  var promptSpecails = window.confirm('Do you want special symbols?')

  var password = generatePassword(promptLength, promptUpCase, promptLowCase, promptDigits, promptSpecails);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

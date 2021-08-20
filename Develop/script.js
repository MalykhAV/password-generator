// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(pwdLength, useUppercase, useLowercase, useNumbers, useSpecial) {
  var randLowerChar = 'abcdefghijklmnopqrstuvwxyz';
  var randUpChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var randDigit = '0123456789';
  var randSpecial = '!"#$%&\'()*+,-./:;<=>?@\\[]^_`{|}~';
  password = "";

  for(var i = 0; i < pwdLength; i++) {
    password += (randLowerChar + randUpChar + randDigit + randSpecial).charAt(Math.floor(Math.random() * (randLowerChar + randUpChar + randDigit + randSpecial).length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(10, true, true, false, false);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let generateBtn = document.querySelector("#generate");
let inputs = document.getElementsByTagName("input");
let getLength = inputs[0];

function generatePassword(pwdLength, useUppercase, useLowercase, useNumbers, useSpecial) {
  const randLowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const randUpCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randDigit = '0123456789';
  const randSpecial = '!"#$%&\'()*+,-./:;<=>?@\\[]^_`{|}~';
  password = "";

  let randomChars = "";
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

  for(let i = 0; i < pwdLength; i++) {
    password += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  let checks = {};

  for(let i = 1; i < inputs.length; i++){
    checks[inputs[i].name] = inputs[i].checked;
  }

  // while (true) {
  //   // // Ask user for the uppercase letters of password
  //   // var promptUpCase = window.confirm('Do you want uppercase letters?');
  //   // // Ask user for the lowercase letters of password
  //   // var promptLowCase = window.confirm('Do you want lowercase letters?');
  //   // // Ask user for the digits letters of password
  //   // var promptDigits = window.confirm('Do you want digits?');
  //   // // Ask user for the special symbols letters of password
  //   // var promptSpecials = window.confirm('Do you want special symbols?');
    
  //   // Check if any of criteria was chosen
  //   if (checks.uppercase === true || checks.lowercase === true || checks.digits === true || checks.symbols === true) {
  //     break;
  //   }
  //   else {
  //     window.alert('You need to choose at least one character type');
  //   }
  // }

  let password = generatePassword(getLength.value, checks.uppercase, checks.lowercase, checks.digits, checks.symbols);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

getLength.onchange = function(){
  console.log(getLength.value);
  if (isNaN(getLength.value) || getLength.value === null || getLength.value < 8 || getLength.value > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

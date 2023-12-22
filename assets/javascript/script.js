// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //creates strings of character options
  var letterString = 'abcdefghijklmnopqrstuvwxyz'
  var capitalLetterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numberString = '0123456789'
  var specialCharString = '`~!@#$%^&*()-_+={}[]|\;:"<>/?'
  var userChoiceStr = ''
//prompts user to input a password length, second line converts string to number
  var lengthInput = prompt('How many characters would you like the password to be?');
  var passLength = parseInt(lengthInput)
//checks for conditions, if no pass then alert to put in a number within the length requuirement and sends back to beginning of function
  if (!passLength || passLength === 0 || !Number.isInteger(passLength) || passLength < 8 || passLength > 128) {
    alert('Please enter a number between 8 and 128 characters.');
    return generatePassword() 
  }
//prompts user to choose what type of characters they would like
  var lowerCase = confirm('Would you like to use lower case letters?');
  var upperCase = confirm('Would you like to use upper case letters?');
  var numbers = confirm('Would you like to use numbers?');
  var specialCharacters = confirm('Would you like to use special characters?');

//checks to make sure that at least one of the characters were chosen, if not alerts to choose one type and sends back to start
  if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
    alert('Please choose at least one character type.');
    return generatePassword()
  }
  //builds the full password strings based on user choice
  if (lowerCase) {
    userChoiceStr += letterString
  }
  if (upperCase) {
    userChoiceStr += capitalLetterString
  }
  if (numbers) {
    userChoiceStr += numberString
  }
  if (specialCharacters) {
    userChoiceStr += specialCharString
  }
  //builds the password with the help of random number generation
  console.log(passLength)
  console.log(userChoiceStr)
  var passString = ''
  for (var i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * userChoiceStr.length);
    passString += userChoiceStr[randomNumber];
  }
  return passString

}


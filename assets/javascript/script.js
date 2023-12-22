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

// var allLowerCase = ['a','b','c'//all the way to z]

//prompt(), alert(), confirm() 

//will need random number generator or possibly two for the addition of lower case
// var randomNumber = Math.floor(Math.random() * Max);

//will need to create arrays of letters, numbers, and special characters
// var letterString = 'abcdefghijklmnopqrstuvwxyz'
// var capitalLetterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// var numberString = '0123456789'
// var specialCharString = '`~!@#$%^&*()-_+={}[]|\;:"<>/?'

// var letterArray = Array.from(letterString);
// console.log(letterArray);
// var capitalLetterArray = Array.from(capitalLetterString);
// console.log(capitalLetterArray);
// var numberArray = Array.from(numberString);
// console.log(numberArray);
// var specialCharArray = Array.from(specialCharString);
// console.log(specialCharArray);

//will need to ask the length of pass
//will need to as if lower case letters
// length of pass will be used as the iteration length
//var userLengthInput = completed by the user
//will need to construct two arrays one with lower case and one with not
//will also need two random nuber gens for each length

// var capitalOnlyArray = capitalLetterArray.concat(numberArray, specialCharArray);
// console.log(capitalOnlyArray);
// var lowerCasePlusAllArray = letterArray.concat(capitalLetterArray, numberArray, specialCharArray);
// console.log(lowerCasePlusAllArray);

function generatePassword() {
  var letterString = 'abcdefghijklmnopqrstuvwxyz'
  var capitalLetterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numberString = '0123456789'
  var specialCharString = '`~!@#$%^&*()-_+={}[]|\;:"<>/?'
  // var letterArray = Array.from(letterString);
  // var capitalLetterArray = Array.from(capitalLetterString);
  // var numberArray = Array.from(numberString);
  // var specialCharArray = Array.from(specialCharString);
  // var userChoiceArr = []
  var userChoiceStr = ''

  var lengthInput = prompt('How many characters would you like the password to be?');
  var passLength = parseInt(lengthInput)

  if (!passLength || passLength === 0 || !Number.isInteger(passLength) || passLength < 8 || passLength > 128) {
    alert('Please enter a number between 8 and 128 characters.');
    return generatePassword() 
  }

  var lowerCase = confirm('Would you like to use lower case letters?');
  var upperCase = confirm('Would you like to use upper case letters?');
  var numbers = confirm('Would you like to use numbers?');
  var specialCharacters = confirm('Would you like to use special characters?');


  if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
    alert('Please enter a character type.');
    return generatePassword()
  }
  if (lowerCase) {
    // userChoiceArr = userChoiceArr.concat(letterArray);
    userChoiceStr += letterString
  }
  if (upperCase) {
    // userChoiceArr = userChoiceArr.concat(capitalLetterArray);
    userChoiceStr += capitalLetterString
  }
  if (numbers) {
    // userChoiceArr = userChoiceArr.concat(numberArray);
    userChoiceStr += numberString
  }
  if (specialCharacters) {
    // userChoiceArr = userChoiceArr.concat(specialCharArray);
    userChoiceStr += specialCharString
  }
  console.log(passLength)
  console.log(userChoiceStr)
  var passString = ''
  for (var i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * userChoiceStr.length);
    console.log(i);
    console.log(randomNumber);
    console.log(userChoiceStr[randomNumber]);
    passString += userChoiceStr[randomNumber];
  }
  console.log(passString)
  return passString

}


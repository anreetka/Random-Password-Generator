// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var LengthOfCharacters = prompt("Enter the length of your desired password(min length: 8, max length: 128): ");
  var numOfCharacters = parseInt(LengthOfCharacters)
  console.log(numOfCharacters);
  if(numOfCharacters<8 || numOfCharacters>128|| isNaN(numOfCharacters)){
    alert("Please Enter a value between 8-128");
    return null;
  }

  var LowerCaseCharacters = confirm("Please press OK to confirm to include any lowercase characters");
  var UpperCaseCharacters= confirm("Please press OK to confirm to include any uppercase characters");
  var NumericCharacters = confirm("Please press OK to confirm to include any numeric characters");
  var SpecialCharacters = confirm("Please press OK to confirm to include any special characters");

  if(!(LowerCaseCharacters) && !(UpperCaseCharacters) && !(NumericCharacters) && !(SpecialCharacters)){
    console.log(LowerCaseCharacters);
    alert("Please select at least one character type!")
    return null;
  }

  return {
    length: numOfCharacters,
    LowerCaseCharacters: LowerCaseCharacters,
    UpperCaseCharacters: UpperCaseCharacters,
    NumericCharacters: NumericCharacters,
    SpecialCharacters: SpecialCharacters
  };

}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomElement = arr[Math.floor(Math.random()* arr.length)];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var passwordCharacters = [];
  var generatedPassword = "";
  
  if(passwordOptions.LowerCaseCharacters){
      passwordCharacters = passwordCharacters.concat(lowerCasedCharacters);
      generatedPassword += getRandom(lowerCasedCharacters);
  }

  if(passwordOptions.UpperCaseCharacters){
      passwordCharacters = passwordCharacters.concat(upperCasedCharacters);
      generatedPassword += getRandom(upperCasedCharacters);
  }

  if(passwordOptions.NumericCharacters){
    passwordCharacters = passwordCharacters.concat(numericCharacters);
    generatedPassword += getRandom(numericCharacters);
  }

  if(passwordOptions.SpecialCharacters){
    passwordCharacters = passwordCharacters.concat(specialCharacters);
    generatedPassword += getRandom(specialCharacters);
  }

  
  for (var i = generatePassword.length; i < passwordOptions.length; i++) {
    generatedPassword += getRandom(passwordCharacters);
  }

  console.log(generatedPassword);
  return generatedPassword;
 
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
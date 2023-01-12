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

let passwordArray = [];
let characterNumber = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  // get the users number of characters
  characterNumber = prompt("How many characters do you want in your password? choose between 10-64!");

  if (characterNumber < 10 || characterNumber > 64) {
    alert("Please choose between 10-64 characters");
    return;
  }

  if (window.confirm("Would you like to use numbers in your password?")) {
    passwordArray = passwordArray.concat(numericCharacters);
  }
 if (window.confirm("Would you like to use special characters in your password?")) {
    passwordArray = passwordArray.concat(specialCharacters);
  }
  if (window.confirm("Would you like to use lowercase characters in your password?")) {
    passwordArray = passwordArray.concat(lowerCasedCharacters);
  }
  if (window.confirm("Would you like to use uppercase characters in your password?")) {
    passwordArray = passwordArray.concat(upperCasedCharacters);
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * passwordArray.length);
  return passwordArray[randomIndex];
}

// Function to generate password with user input (this will start the process)
function generatePassword() {
  
  getPasswordOptions();
  let result = "";
  for (let i = 0; i < characterNumber; i++) {
    result += getRandom(passwordArray);
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

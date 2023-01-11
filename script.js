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

let passwordArray=[];
let passwordlen=0;

// Function to prompt user for password options
function getPasswordOptions() {
if(confirm(confirmNumber)){
  passwordArray=passwordArray.concat(numericCharacters);
  
}
if(confirm(confirmCharacter)){
  passwordArray=passwordArray.concat(specialCharacters);
  
}
if(confirm(confirmLowercase)){
  passwordArray=passwordArray.concat(lowerCasedCharacters);
  
}
if(confirm(confirmUppercase)){
  passwordArray=passwordArray.concat(upperCasedCharacters);
  
}
}

// Function for getting a random element from an array
function getRandom(arr) {


}

// Function to generate password with user input (this will start the process)
function generatePassword() {
  //prompts user to input the amount of character

  if (confirm ("How many characters do you want in your password? choose between 10-64!"));

   {

  
    // Start user input prompts

    confirmNumber = confirm("Would you like to use numbers in your password?");
    confirmCharacter = confirm("Would you like to use special characters in your password?");
    confirmUppercase = confirm("Would you like to use uppercase characters in your password?");
    confirmLowercase = confirm("Would you like to use lowercase characters in your password?");
    }
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
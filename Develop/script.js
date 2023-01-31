// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "*", ".", "/", ":", ";", "?", "@", "^", "_", "`", , "|", "~"];
var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function generatePassword() {
  let keyword = "";
  let choiseArray = [];

  //promt to get user input
  let passLength = prompt("How many characters would you like your password to have?, Please choose between 8 - 128");

  //prompt if user input is not within the given range or not a number
  if (isNaN(passLength)) {
    alert("Please inter a numerical value.");
    return;
  } else if (passLength < 8 || passLength > 128) {
    alert("Must be between 8 - 128 characters. Please try again!!");
    return;
  };

  //promt for the uppercase
  if (confirm("Would you like an uppercase in your password?"))
    choiseArray = choiseArray.concat(upperCase);

  //prompt for lowercase
  if (confirm("Would you like a lowecase in your password?"))
    choiseArray = choiseArray.concat(lowerCase);

  //prompt for special character
  if (confirm("Would you like a special character in your password?"))
    choiseArray = choiseArray.concat(specialChar);

  //promp for numerics
  if (confirm("Would you like a number in your password?"))
    choiseArray = choiseArray.concat(numerics);

  //Building the password
  for (var i = 0; i < passLength; i++)
    keyword += choiseArray[Math.floor(Math.random() * choiseArray.length)];
  return keyword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  } else {
    passwordText.value = '';
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

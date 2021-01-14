//make strings with possible values 
 var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 var lower = "abcdefghijklmnopqrstuvwxyz"
 var numeric = "0123456789"
 var symbol = "!@#$%^&*()?/;:~"
 //
 var allowedCharacters = ""
 if (characterTypes.hasUpper) {
   allowedCharacters = allowedCharacters.concat(upper)
 }
 if (characterTypes.hasLower) {
   allowedCharacters = allowedCharacters.concat(lower)
 }
 if (characterTypes.hasNumber) {
   allowedCharacters = allowedCharacters.concat(number)
 }
 if (characterTypes.hasSymbol) {
   allowedCharacters = allowedCharacters.concat(symbol)
 }
 // store password built
 var password = "";
 // random characters from string for each position
 for (var i = 0; i < passLength; i++) {
   var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
   var randomCharacter = allowedCharacters[randomIndex];
   password = password.concat(randomCharacter);
 }
 //function to create passwordLength
 function choosePasswordLength() {
    var passwordLength = Number(prompt("How many characters would you like your password to be?"));
    while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
 }

// function for user to select charTypes
 function characterTypes() {
    var upper = confirm("Would you like uppercase letters");
    if(upper) {
      userSelection.push(upper);
    }
    var lower = confirm("would you like lowercase letters");
    if(lower) {
      userSelection.push(lower);
    }
    var symbol = confirm("Would you like and Specail Characters");
    if(symbol) {
      userSelection.push(symbol);
    }
    var number = confirm("Would you like to add numbers to your password?");
    if(number) {
      userSelection.push(number);
    }
  
// provide params for function 
function writePassword() {
  var passwordLength = choosePassLength();
  var characterTypes = chooseCharacterTypes();
  var password = generatePassword(passLength, characterTypes);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

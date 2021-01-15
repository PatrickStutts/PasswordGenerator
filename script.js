// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterTypes = {}
//function to create passwordLength
//function choosePasswordLength() {
    passwordLength = Number(prompt("How many characters would you like your password to be?"));
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) passwordLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
// }  
//  // function for user to confirm chars
  //function chooseCharacterTypes() {
     // make charTYpes obj 
    //var characterTypes = {hasUpper, hasLower, hasNumber, hasSymbol}
    var hasUpper = confirm("Would you like uppercase letters");
    if(hasUpper) {
      characterTypes.hasUpper = hasUpper;
    }
    var hasLower = confirm("would you like lowercase letters");
    if(hasLower) {
      characterTypes.hasLower = hasLower;
    }
    var hasSymbol = confirm("Would you like and Specail Characters");
    if(hasSymbol) {
      characterTypes.hasSymbol = hasSymbol;
    }
    var hasNumber = confirm("Would you like to add numbers to your password?");
    if(hasNumber) {
      characterTypes.hasNumber = hasNumber;
    } 
    var btnPrompt = alert("Press generate button to see password")
 //}
 console.log(characterTypes);
 //make strings with values of characters
function generatePassword(passwordLength, characterTypes) { 
    console.log("abc")
 var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 var lower = "abcdefghijklmnopqrstuvwxyz"
 var number = "0123456789"
 var symbol = "!@#$%^&*()?/;:~"
 
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
 
 //store password built
 var password = ""
 // random characters 
 for (var i = 0; i < passwordLength; i++) {
   var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
   var randomCharacter = allowedCharacters.charAt(randomIndex);
   password = password.concat(randomCharacter);
 } console.log(password);
 return password 
 
}
//chooseCharacterTypes();

// console.log(characterTypes);
// provide params for writePassword function 
function writePassword() {

//   var passwordLength = choosePasswordLength();
//   var characterTypes = chooseCharacterTypes();

  var password = generatePassword(passwordLength, characterTypes);
 //console.log(password);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

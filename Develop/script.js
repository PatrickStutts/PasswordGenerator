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

//grabbing all lowercase letters between charcode columns 97-123
var lowerCase = String.fromCharCode(Math.floor(Math.random() *26) + 97);

//grabbing uppercase letters between charcode columns 65-91
var upperCase = String.fromCharCode(Math.floor(Math.random() *26) +65); 

//numbers 0-9 from charcode columns 48-58
var number =  String.fromCharCode(Math.floor(Math.random() * 10) +48);

//special symbols
var symbol = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~/";


var allowedCharacters = ""
  if (characterTypes.hasLowerCase) {
    allowedCharacters = allowedCharacters.concat(lowerCase)
  }
  if (characterTypes.hasUpperCase) {
    allowedCharacters = allowedCharacters.concat(upperCase)
  }
  if (characterTypes.hasNumber) {
    allowedCharacters = allowedCharacters.concat(numeric)
  }
  if (characterTypes.hasSymbol) {
    allowedCharacters = allowedCharacters.concat(special)
  }

  var password = ""
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    var randomCharacter = allowedCharacters[randomIndex];
    password = password.concat(randomCharacter);
   } 
   
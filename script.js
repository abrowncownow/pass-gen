// Assignment Code
var generateBtn = document.querySelector("#generate");


//Determine PW Length
function pwLength(){
  var passLength = window.prompt("Enter desired length of password between 8 and 128 characters");
  while (!(passLength > 7 && passLength < 129)){
    window.alert ("Choose a number between 8 and 128");
    passLength = window.prompt("Enter desired length of password between 8 and 128 characters");
  }
  window.alert ("Your password will be " + passLength + " characters.");
  return passLength;
}
//Determine Lowercase
function pwChars(){
  var passLower = window.confirm("Use lowercase letters?");
  var passUpper = window.confirm("Use uppercase letters?");
  var passNumer = window.confirm("Use numbers?");
  var passSpec = window.confirm("Use special characters?");

  if (passLower|| passUpper || passNumer || passSpec){
    var passValid = true;
    window.alert ("Your password is valid!");
  } else{
    passValid = false;
    window.alert ("Your password is not valid. You must use at least one.");
    pwChars();
  }


  return;
}
//Determine Characters

//password generator
function generatePassword(){
  var passLength = pwLength();
  pwChars();
  window.alert ("Computing...");
  window.alert ("Beep");
  window.alert ("Boop");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
}
//Determine Lowercase
function pwLower(){
  var passLower = window.confirm("Use lowercase letters?");
}
//Determine Uppercase
function pwUpper(){
  var passUpper = window.confirm("Use uppercase letters?");
}

//Determine numeric
function pwNumer(){
  var passNumer = window.confirm("Use numbers?");
}

//Determine Special Characters
function pwSpec(){
  var passSpec = window.confirm("Use special characters?");
}
//Validate Results
function pwValid(){
  if (passLower || passUpper || passNumer || passSpec){
    var passValid = true;
  } else{
    passValid = false;
  }
}
//Determine Characters
function pwChars(){
  pwLength();
  pwLower();
  pwUpper();
  pwNumer();
  pwSpec();
}
//password generator
function generatePassword(){
  pwChars();
  pwValid();
  while (!passValid){
    window.alert("You must accept at least one character type for your password.");
    pwChars();
    pwValid();
  }
  window.alert ("Your password is valid!");
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

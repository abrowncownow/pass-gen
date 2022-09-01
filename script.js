// Assignment Code
var generateBtn = document.querySelector("#generate");

const lcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const ucase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
const number = ["0","1","2","3","4","5","6","7","8","9"];
const spec = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}",";",":","'",",",".","/","<",">","?"];


function generatePassword(){
  //determine PW Length
  var passLength = window.prompt("Enter desired length of password between 8 and 128 characters");
  while (!(passLength > 7 && passLength < 129)){
    window.alert ("Choose a number between 8 and 128");
    passLength = window.prompt("Enter desired length of password between 8 and 128 characters");
  }
  window.alert ("Your password will be " + passLength + " characters.");

  // determine pass set
  var passLower = window.confirm("Use lowercase letters?");
  var passUpper = window.confirm("Use uppercase letters?");
  var passNumer = window.confirm("Use numbers?");
  var passSpec = window.confirm("Use special characters?");

  //validate pass set
  if (passLower|| passUpper || passNumer || passSpec){
    var passValid = true;
    window.alert ("Your password is valid!");
  } else{
    passValid = false;
    window.alert ("Your password is not valid. You must use at least one.");
    pwChars();
  }

  //declare pass set vars
  var passSet = [];
  //push to pass set array
  if (passLower){passSet.push(lcase);}
  if (passUpper) {passSet.push(ucase);}
  if (passNumer){passSet.push(number);}
  if (passSpec){passSet.push(spec);}
  window.alert (passSet);
  //calculate password
  var password = "";
  for (var i = 0; i <= passLength; i++){
    var rand = Math.floor(Math.random() * passSet.length);
    password += passSet[rand];
 }
 window.alert(password);
 return password;


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowChar = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upprChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spcChar = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

// Write password to the #password input
function writePassword() {
  let length = prompt("How long do you want the password to be? (Length should be at least 8 characters and no more than 128 characters)")
    if (isNaN(length)) {
      alert("Length input should be a number");
  } else if (length < 8 || length > 128) {
      alert("Length number should be at least 8 characters and no more than 128 characters");
  } else {
      let lowCharCnfm = confirm("Would you like to include lowercase characters?");
      let upprCharCnfm = confirm("Would you like to include uppercase characters?");
      let numCharCnfm = confirm("Would you like to include numberic characters?");
      let spcCharCnfm = confirm("Would you like special characters?");
  }



  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Assignment a button using querySelector
var generateBtn = document.querySelector("#generate");

// Add event listener to generateBtn 
generateBtn.addEventListener("click", writePassword);


var lowChar = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upprChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spcChar = ["!","\"","#","$","%","&","'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

// Write password to the #password input
function writePassword() {
  let passLength = prompt("How long do you want the password to be? (Length should be at least 8 characters and no more than 128 characters)")
    if (isNaN(passLength)) {
      alert("Length input should be a number");
  } else if (passLength < 8 || passLength > 128) {
      alert("Length number should be at least 8 characters and no more than 128 characters");
  } else {
      let lowCharCnfm = confirm("Would you like to include lowercase characters?");
      let upprCharCnfm = confirm("Would you like to include uppercase characters?");
      let numCharCnfm = confirm("Would you like to include numberic characters?");
      let spcCharCnfm = confirm("Would you like special characters?");
     
      let userChoices = [lowCharCnfm, upprCharCnfm, numCharCnfm, spcCharCnfm]; 
      
        function generatePassword() {
         let passGenerated = [];
         let i = 0;

          while (i < passLength) {
            if (userChoices[0]) {
              var indexLowChar = Math.floor(Math.random()*lowChar.length);
              passGenerated.push(lowChar[indexLowChar]);
              i++;
            }
            if (userChoices[1] && i < passLength){
              var indexUpprChar = Math.floor(Math.random()*upprChar.length);    
              passGenerated.push(upprChar[indexUpprChar]);
              i++;
            }
            if (userChoices[2] && i < passLength){
              var indexNumChar = Math.floor(Math.random()*numChar.length);      
              passGenerated.push(numChar[indexNumChar]);
              i++;
            }
            if (userChoices[3] && i < passLength){
              var indexSpcChar = Math.floor(Math.random()*spcChar.length);
              passGenerated.push(spcChar[indexSpcChar]);
              i++;
            }
          }   

          return passGenerated.join("");
        }
  }    
  
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





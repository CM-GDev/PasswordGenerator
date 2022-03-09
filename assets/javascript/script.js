// Assignment a button using querySelector
var generateBtn = document.querySelector("#generate");

// Add event listener to generateBtn 
generateBtn.addEventListener("click", writePassword);

//Establish global variables, which are all available characters for generating password
var lowChar = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upprChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spcChar = ["!","\"","#","$","%","&","'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

//Function initiation to generate a password
function writePassword() {
  //Prompt the user for password length
  let passLength = prompt("How long do you want the password to be? (Length should be at least 8 characters and no more than 128 characters)")
  //Alert user if anything other than a number was input
  if (isNaN(passLength)) {
      alert("Length input should be a number");
    //Alert user if number is not within range  
  } else if (passLength < 8 || passLength > 128) {
      alert("Length number should be at least 8 characters and no more than 128 characters");
  
  } else {
    //Ask the User what types of characters are required
      let lowCharCnfm = confirm("Would you like to include lowercase characters?");
      let upprCharCnfm = confirm("Would you like to include uppercase characters?");
      let numCharCnfm = confirm("Would you like to include numberic characters?");
      let spcCharCnfm = confirm("Would you like special characters?");
      //Save User choices in an Array
      let userChoices = [lowCharCnfm, upprCharCnfm, numCharCnfm, spcCharCnfm]; 
      //Function for calculating password
        function generatePassword() {
         //Establishing local variables
         let passGenerated = [];
         let i = 0;
          //Loop until length of password is the length the User requested
          while (i < passLength) {
            //If User requested a lowercase character, add one to password
            if (userChoices[0]) {
              var indexLowChar = Math.floor(Math.random()*lowChar.length);
              passGenerated.push(lowChar[indexLowChar]);
              i++;
            }
            //If User requested a uppercase character, add one to password
            if (userChoices[1] && i < passLength){
              var indexUpprChar = Math.floor(Math.random()*upprChar.length);    
              passGenerated.push(upprChar[indexUpprChar]);
              i++;
            }
            //If User requested a number character, add one to password
            if (userChoices[2] && i < passLength){
              var indexNumChar = Math.floor(Math.random()*numChar.length);      
              passGenerated.push(numChar[indexNumChar]);
              i++;
            }
            //If User requested a special character, add one to password
            if (userChoices[3] && i < passLength){
              var indexSpcChar = Math.floor(Math.random()*spcChar.length);
              passGenerated.push(spcChar[indexSpcChar]);
              i++;
            }
          }   
          //Return finished password
          return passGenerated.join("");
        }
  }    

  // Write password to the #password input
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





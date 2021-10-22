// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

//==============================================================================================================
    //Setting up constraints
    
    //Capital letters can be ignored
    input = input.toLowerCase().split('')
    
    //if there is no alphabet passed in...
    if (!alphabet) {
      
      //It'll return false
      return false
    }
    //if the length of the alphabet passed in is not exactly 26...
    if(alphabet.length !== 26) {
      
      //It'll return false
      return false
    }

//==============================================================================================================
    //Checking if the alphabet parameter is unique

    //create empty array to contain extra characters from the alphabet 
    const extrasArray = []  
    
    //Loops through the alphabet with each character assigned as 'character'
    for(let character in alphabet) {
      
      //If the character is not present in the array...
      if(extrasArray.indexOf(alphabet[character]) < 0) {
        
        //...push the character into the 'extrasArray'
        extrasArray.push(alphabet[character])
      
     //If the letter is already present, which means it's a duplicate...
      }else{
        
        //...return false
        return false
      }
    }
//==============================================================================================================
    //arrays
    
    //An array of the alphabet with an included space
    let abc = [
      "a","b","c","d",
      "e","f","g","h",
      "i","j","k","l",
      "m","n","o","p",
      "q","r","s","t",
      "u","v","w","x",
      "y","z"," "
    ]
    
    //Assign a variable to an array that spreads the 'alphabet' with a space
    let altAbc = [...alphabet, " "];

//==============================================================================================================  
    //encoding
    if (encode === true) {
      
      //Map over the array of letters...
     return input.map((letter) => {
       
       //...by accessing the 'altAbc' array which returns the element at the position of the index of the 'letter'
        return altAbc[abc.indexOf(letter)]
     
     //Join the characters after the map
     }).join('')
    }
//==============================================================================================================
    //decoding
    else {
      
      //Map over the array of letters...
      return input.map((letter) => {   //We map over array of letters to create new array with results of the callback fn
        
        //...by accessing the 'abc' array which returns the element at the position of the index of the 'letter'
        return abc[altAbc.indexOf(letter)]
        
      //Join the characters after the map  
      }).join('')
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

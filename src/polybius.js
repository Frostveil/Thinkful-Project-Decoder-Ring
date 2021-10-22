// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

//==============================================================================================================
    //Important Object
    const polybiusSquare = {
      "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
      "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
      "l": "13", "m": "23", "n": "33", "o": "43", "p": "53", 
      "q": "14", "r": "24", "s": "34", "t": "44", "u": "54", 
      "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
    };
    
//==============================================================================================================
    //Setting up constraints
    
    //The output to be returned
    let output = "";

    //Captial letters can now be ignored
    input = input.toLowerCase();

//==============================================================================================================
    // encoding
    if (encode) {
     
      //Loops through the input's character
      for (let i = 0; i < input.length; i++) {
        
        //Each iteration is assigned as currentChar
        let currentChar = input[i];

        //If either 'i' or 'j' is iterated...
        if (currentChar === 'i' || currentChar === 'j') {
          
          //...it'll add the number of 'i' from the polybiusSquare to the output
          output += polybiusSquare['i'];
        
        //Else if the currentChar is a space...
        }else if (currentChar === ' ') {
          
          //...the space will be maintained into the output
          output += ' ';
          
        //Otherwise...  
        }else{
        
          //...a .find() with each value of the polybiousSquare being assigned as a pair will look for a deep equal
          //between the currentChar and the first pair of the polybiousSquare.
          let match = Object.entries(polybiusSquare).find(pair => currentChar === pair[0]);
          
          //And will add the number of the letter to the output
          output += match[1];
            };
        };
      
//==============================================================================================================   
    //decoding
    } else { 
      
      // Counts the number of characters
        let count = 0;
      
      //Loops through the input's characters
        for (let j = 0; j < input.length; j++) {
          
          //if an input is not a space character...
            if (input[j] !== ' ') {
              
                //...it'll add to the count
                count++;
            };
        };

        // Checking to make sure the input is an even number
        if (count % 2 !== 0) {
            return false;
        };

        //Loops through the characters of the input
        for (let k = 0; k < input.length; k += 2) {
          
          let decoded = `${input[k]}${input[k + 1]}`;
          
          //If the decoded includes a space...
          if (decoded.includes(' ')) {
            
            //...the space is maintained. The following two lines are required as the 'output += ' '' allows spaces to be
            //made and 'k -= 1' keeps the output from being undefined.
            output += ' ';
            k -= 1;
          
          //Else if the decoded deeply equals 42...
          } else if (decoded === '42') {
              
            //...it'll add '(i/j) into the output'
            output += '(i/j)';
              
          //Otherwise...  
          } else {
              
            //...a .find() with each value of the polybiousSquare being assigned as a char will look for a deep equal
          //between the decoded and the character of an entry of the polybiousSquare.
            let charFound = Object.entries(polybiusSquare).find((char) => decoded === char[1]);
            
              //The charFound will then be added into the output
              output += charFound[0];
            };
        };
    };

    return output;
};
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

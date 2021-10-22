// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // words can be put here 
    
    function caesar(input, shift, encode = true) {
      if(!shift || shift < -25 || shift > 25) {
        return false;
      }

      input = input.toLowerCase();

      let output = "";

      if(encode === false) {
        shift *= -1
      }

      if(shift < 0) {
        shift+=26
      }
  
      for(let character of input) { 
        let newCode = character;

        if(character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {


          newCode = ((character.charCodeAt(0) - 97 + shift) % 26) + 97; 


          newCode = String.fromCharCode(newCode); 
          }
          output+=newCode;
        };

    return output;
    };
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

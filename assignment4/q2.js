
const crypto = require("crypto");

function findHashCode(prefix, baseStr) {
     let input = 0;


     //loop till the prefix does not match with the string.
     while (true) {
          const inputStr = baseStr + input;
          const hash = crypto.createHash("sha256").update(inputStr).digest("hex");

          if (hash.startsWith(prefix)) {
               return { inputStr, hash };

          }
          input++;
     }
}

const { inputStr, hash } = findHashCode("00000", "devadnani26");
console.log(`Input: ${inputStr}`);
console.log(`Hash: ${hash}`);

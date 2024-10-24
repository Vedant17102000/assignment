const crypto = require('crypto');


//function takes prefix ("00000")
function findHash(prefix) {
     let input = 0;
     let inputStr, hash;

     //loop till the prefix does not match with the string.
     while (true) {
          inputStr = input.toString();
          hash = crypto.createHash("sha256").update(inputStr).digest("hex");
          if (hash.startsWith(prefix)) {
               return { input, hash };
          }
          input++;
     }
}

const res = findHash("00000");
console.log(`Input : ${res.input}`);
console.log(`Hash : ${res.hash}`);

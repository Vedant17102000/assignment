const crypto = require("crypto");


//function takes inputstring and prefix
function findNonce(inputString, prefix) {
  let nonce = 0;
  
  while (true) {
    const hash = crypto.createHash("sha256").update(inputString + nonce).digest("hex");

    if (hash.startsWith(prefix)) {
      return { nonce, hash };
    }

    nonce++;
  }
}

// Input 
const inputStrings = ["Dev => Karan | Rs 100", "Karan => Darsh | Rs 10"];
const prefix = "00000"; 

inputStrings.forEach((inputString, index) => {
  const { nonce, hash } = findNonce(inputString, prefix);
  console.log(`Result ${index + 1}:`);
  console.log(`Nonce: ${nonce}`);
  console.log(`Hash: ${hash}\n`);
});

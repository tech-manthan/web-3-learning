const crypto = require("crypto");

function findHashWithPrefix(inputPrefix, prefix) {
  let input = 0;
  while (true) {
    let inputStr = `${inputPrefix}${input}`;
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return {
        input: input,
        nonce: input,
        hash,
      };
    }
    input++;
  }
}

const result = findHashWithPrefix("100xdevs", "00000");

console.log(`Input : ${result.input}`);
console.log(`Nonce : ${result.nonce}`);
console.log(`Hash : ${result.hash}`);

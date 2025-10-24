const crypto = require("crypto");

const input = "Manthan";
const hashBinary = crypto.createHash("sha256").update(input).digest("binary");
const hashHex = crypto.createHash("sha256").update(input).digest("hex");

console.log(hashBinary);
console.log(hashHex);

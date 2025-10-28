import * as secp from "@noble/secp256k1";
import { hmac } from "@noble/hashes/hmac.js";
import { sha256 } from "@noble/hashes/sha2.js";

secp.hashes.hmacSha256 = (key, msg) => hmac(sha256, key, msg);
secp.hashes.sha256 = sha256;
async function main() {
  const privKey = secp.utils.randomSecretKey(); // renamed from randomSecretKey in newer versions
  const message = new TextEncoder().encode("hello world");

  const pubKey = secp.getPublicKey(privKey);
  const signature = await secp.signAsync(message, privKey);
  const isValid = secp.verify(signature, message, pubKey);
  console.log(isValid);
}

main();

function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map((char) => char.charCodeAt(0)));
}

const asciiString = "Hello";
const bytes = asciiToBytes(asciiString);
console.log(bytes);

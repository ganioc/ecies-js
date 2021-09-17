const crypto = require('crypto')


const text = "Hello the whole world!"
const textBuf = Buffer.from(text);

console.log("text: ", text)
console.log("text len: ", text.length)
console.log("textBuf: ", textBuf)
console.log("textBuf len:", textBuf.length)


let iv = new Buffer.alloc(16); // fill with zeros

console.log('generate a 256 random key()')
const bufSecret = crypto.randomBytes(32);

let cipher = crypto.createCipheriv('aes-256-cbc', bufSecret, iv);
let encryptedData = cipher.update(textBuf, "hex", "hex")
encryptedData += cipher.final("hex")
console.log('encryptedData: ', encryptedData)
console.log('encryptedData len: ', encryptedData.length)

let decipher = crypto.createDecipheriv('aes-256-cbc', bufSecret, iv);
let decryptedData = decipher.update(encryptedData, "hex", "hex")
decryptedData += decipher.final("hex")
console.log("decryptedData: ", decryptedData)
console.log("decryptedData len: ", decryptedData.length)
console.log(decryptedData.toString())
let dataFinal = Buffer.from(decryptedData, "hex")
console.log("dataFinal:", dataFinal);
console.log("dataFinal len: ", dataFinal.length)
console.log(dataFinal.toString())

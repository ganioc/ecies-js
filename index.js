const eccrypto = require("eccrypto");

const privKey = "27ec1168988b7a7a6df13574ea2fc444252c0668e01934f4a4488e62e3374384";
const privKeyBuf = Buffer.from(privKey, 'hex')
console.log('privKeyA:', privKeyBuf)
console.log('privKeyBuf len:', privKeyBuf.length)
const pubKey = "04cf4c2760c5f87c7675250968f24d46ee67ad84ddfc5d10a46dddb16ae52d92d9a283a7b60499c1b8c9a73c32d63676218e6827cd5efa1c34113c9e1816617558"
const pubKeyBuf = Buffer.from(pubKey, 'hex')
console.log('pubKey:', pubKeyBuf)
console.log('pubKey leng:', pubKeyBuf.length)
const addr = "0x0a3ab88829f7221ee9755eceb5d47a8ed614427d"

const encryptionKey = Buffer.from("abc")



console.log(encryptionKey.toString())

var privateKeyA = eccrypto.generatePrivate();

var publicKeyA = eccrypto.getPublic(privateKeyA);
console.log('publicKeyA:', publicKeyA)
console.log('publicKeyA len:', publicKeyA.length)
var privateKeyB = eccrypto.generatePrivate();
var publicKeyB = eccrypto.getPublic(privateKeyB);

// Encrypting the message for B.
// eccrypto.encrypt(pubKeyBuf, Buffer.from("msg to b")).then(function (encrypted) {
//     console.log(encrypted)
//     // B decrypting the message.
//     // eccrypto.decrypt(privateKeyB, encrypted).then(function (plaintext) {
//     //     console.log("Message to part B:", plaintext.toString());
//     // });
// });
async function main() {
    let encryptMsg = await eccrypto.encrypt(pubKeyBuf, Buffer.from("msg to b"));
    console.log(encryptMsg)

    let plainMsg = await eccrypto.decrypt(privKeyBuf, encryptMsg);
    console.log(plainMsg.toString())
}
main()
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


var privateKeyA = eccrypto.generatePrivate();

var publicKeyA = eccrypto.getPublic(privateKeyA);
console.log('publicKeyA:', publicKeyA)
console.log('publicKeyA len:', publicKeyA.length)
var privateKeyB = eccrypto.generatePrivate();
var publicKeyB = eccrypto.getPublic(privateKeyB);

async function main() {
    console.log("\narguments:", process.argv.length);
    // 614c9c81bae2d6097e1fc1af310f06810a6b85a2f51b40bab70a438fd076e5b2
    // 956bd3b369a83cf9a6da87dd2d6ebce2b2e0d10763f7c3a87b70e916c09d7472
    let keyStr = "614c9c81bae2d6097e1fc1af310f06810a6b85a2f51b40bab70a438fd076e5b2";

    let encryptMsg = await eccrypto.encrypt(pubKeyBuf, Buffer.from(keyStr, 'hex'));
    console.log("\nencoded:")
    console.log(encryptMsg)
    console.log("iv:", encryptMsg.iv, encryptMsg.iv.length)
    console.log("ephemPublicKey:", encryptMsg.ephemPublicKey, encryptMsg.ephemPublicKey.length)
    console.log("ciphertext:", encryptMsg.ciphertext, encryptMsg.ciphertext.length)
    console.log("mac:", encryptMsg.mac, encryptMsg.mac.length)

    console.log("total length:", encryptMsg.iv.length + encryptMsg.ephemPublicKey.length + encryptMsg.ciphertext.length + encryptMsg.mac.length)

    console.log('\ndecoded:')
    const fakeStruct = {
        iv: encryptMsg.iv,
        ephemPublicKey: encryptMsg.ephemPublicKey,
        ciphertext: encryptMsg.ciphertext,
        mac: encryptMsg.mac
    }
    let plainMsg = await eccrypto.decrypt(privKeyBuf, fakeStruct);
    console.log(plainMsg.toString('hex'))
}
main()
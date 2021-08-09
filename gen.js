const crypto = require('crypto')
const eccrypto = require("eccrypto");
const { env } = require('process');

// const privKey = "9e5fdfbc4ce8e4cf757570d9dc611e36a35c830f37f92641abf27aead6b20251";
const pubKey = "04d709c4fb8695d079625dc28f019fb615b752dbbfc7fc37ddaa0e2186ed100a88ffb9db5d2e0b4136350b984a83620dbeed13c488116bf4a1ced600d4b1199184"

async function main() {
    console.log('generate a 256 random key()')
    const buf = crypto.randomBytes(32);
    console.log(buf);
    const bufHex = buf.toString('hex')
    console.log(bufHex)
    const bufDecryp = Buffer.from(bufHex, 'hex')
    console.log(bufDecryp)

    // const buf1 = Buffer.from("5a0db21d684f99429a4ab54da0d4390c4e73b2a5aab0225bcaf85112f70fed03", 'hex')
    // encrypt random with public key
    let encryptMsg = await eccrypto.encrypt(Buffer.from(pubKey, "hex"), buf);
    console.log("\nencoded:")
    console.log(encryptMsg)
    console.log("iv:", encryptMsg.iv, encryptMsg.iv.length)
    console.log("ephemPublicKey:", encryptMsg.ephemPublicKey, encryptMsg.ephemPublicKey.length)
    console.log("ciphertext:", encryptMsg.ciphertext, encryptMsg.ciphertext.length)
    console.log("mac:", encryptMsg.mac, encryptMsg.mac.length)
    // let outBuf = Buffer.from([]);
    // outBuf = Buffer.concat(outBuf, encryptMsg.iv);
    // outBuf = Buffer.concat(encryptMsg.ephemPublicKey);
    // outBuf = Buffer.concat(encryptMsg.ciphertext);
    // outBuf = Buffer.concat(encryptMsg.mac);
    let outBuf = Buffer.concat([encryptMsg.iv, encryptMsg.ephemPublicKey, encryptMsg.ciphertext, encryptMsg.mac]);
    console.log("out length sum:", encryptMsg.iv.length + encryptMsg.ephemPublicKey.length + encryptMsg.ciphertext.length + encryptMsg.mac.length)

    console.log("output buf:")
    console.log(outBuf)
    console.log("length:", outBuf.length)
    console.log(outBuf.toString('hex'))

}
main()
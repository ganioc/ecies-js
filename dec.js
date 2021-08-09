const eccrypto = require("eccrypto");


const privKey = "9e5fdfbc4ce8e4cf757570d9dc611e36a35c830f37f92641abf27aead6b20251";
const privKeyBuf = Buffer.from(privKey, 'hex')

const encrypt = "d056b155000137a3dd224ec93a654fac045b264baa412df8a43c5b3664f970a331707fe1202543c90c494d388abd4632c8358d4777354ccfa4ec33f9bf5944d1b10f97cbd77517c07b77b669ded5bbc19636f367caf1f3505f73e711a2f5cf468699f624d8dc8d21078776e7e1bedb4d1026166fde72097c11a660b0e583b4bd7c335fecc49ba5bcc822f280f6746915c7312ba77098893be85da50895012176cc";

async function main() {
    let encryptBuf = Buffer.from(encrypt, "hex")
    console.log("length:", encryptBuf.length);

    const fakeStruct = {
        iv: encryptBuf.slice(0, 16),
        ephemPublicKey: encryptBuf.slice(16, 81),
        ciphertext: encryptBuf.slice(81, 129),
        mac: encryptBuf.slice(129, 161)
    }
    let plainMsg = await eccrypto.decrypt(privKeyBuf, fakeStruct);
    console.log(plainMsg.toString('hex'))
}

main()
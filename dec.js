const eccrypto = require("eccrypto");

const privKey = "cdc7cc95755f19aa8168e2b0c3dd89d556be87b60608835549c0aee38d156640"
// const privKey = "9e5fdfbc4ce8e4cf757570d9dc611e36a35c830f37f92641abf27aead6b20251";

const privKeyBuf = Buffer.from(privKey, 'hex')

const encrypt = "0a902c8e4104a94f33df77e08d8aba7e045fddc3c3d465c2fbe8a29e6aa258859d3de12aa577c07237410863024302aec857f07137bca018d285f9d089614f68c24bc14b6b8589a2a622dea2208f32e7740c1d1cdfbd54c3715616cd2b89ffeb8c79b9be10f8b0256e867d8568e8f076e939b5074533d1d50733e172398b183972de2d2a563e8befb2c0796ed5160da5ab27f4ff6eab5cf9b7cd56c7c91bdce4ac";

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
const eccrypto = require("eccrypto");

// const privKey = "cdc7cc95755f19aa8168e2b0c3dd89d556be87b60608835549c0aee38d156640"
// const privKey = "9e5fdfbc4ce8e4cf757570d9dc611e36a35c830f37f92641abf27aead6b20251";
const privKey = "d96853db1b36acbb796c466cc8971d6545f58a78b43d82eedeb797fc53203d81";

const privKeyBuf = Buffer.from(privKey, 'hex')

// const encryptedSecret = "0a902c8e4104a94f33df77e08d8aba7e045fddc3c3d465c2fbe8a29e6aa258859d3de12aa577c07237410863024302aec857f07137bca018d285f9d089614f68c24bc14b6b8589a2a622dea2208f32e7740c1d1cdfbd54c3715616cd2b89ffeb8c79b9be10f8b0256e867d8568e8f076e939b5074533d1d50733e172398b183972de2d2a563e8befb2c0796ed5160da5ab27f4ff6eab5cf9b7cd56c7c91bdce4ac";

const encryptedSecret = "03a03bd1b87807996bdcb361c2bb6fbd0479dbf9c8baf7fa61ff402d675ec2e03908806616061115c505bf5068e8aecb0c25de8bd18fb973004c5f01573eb289e7881738b9113b53829665072e4070e64bdf25ef3027564b584b0b2d24e25056335bea6e9ec9f8cd09a95e01ce32f377336bce7408f8824576babab6f5cb4604f8eac613af74e36b159f2d3f87016d27083721bed7f0802f5fa6a6aef1aae5ef41";

async function main() {
    let encryptBuf = Buffer.from(encryptedSecret, "hex")
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
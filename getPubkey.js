const eccrypto = require("eccrypto");


const privKey = "6c189cc8dc0ffde6e830ee520f581226d7e34a5150df9a617e815e472fe9f987";
// pub  046a60cbc4f866511118812b6d89f51b879bac86793b8e86e5fd4ff1fc0e8aeb8288e3cfda9dc7fe205ca68702f70ed5bad0d5c816e1fcaf889f86b8ae36012cd7


// const privKey = "73be53ae72b11b71beb398da1d9d4dd3cdadbd9b22dc6b98377917b9bbb8bfa8"
// pubkey 04e7341fe1c608b348f051deb090d86794e6a2380d5954e87e225bd4327c70a440e7ed3ea698262fb2da4d354c3dd7ae6eef3ad97a20b993a5351925923938659b


const privKeyBuf = Buffer.from(privKey, 'hex')


var pubKey = eccrypto.getPublic(privKeyBuf);
console.log('publicKey:', pubKey.toString('hex'))



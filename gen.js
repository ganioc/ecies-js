const crypto = require('crypto')

function main() {
    console.log('generate a 256 random key()')
    const buf = crypto.randomBytes(32);
    console.log(buf);
    const bufHex = buf.toString('hex')
    console.log(bufHex)
    const bufDecryp = Buffer.from(bufHex, 'hex')
    console.log(bufDecryp)

}
main()
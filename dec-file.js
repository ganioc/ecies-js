const crypto = require('crypto')
const fs = require('fs')

const secret = "ea88dab6de62ef21a592d05d45868738fec761eb49fca5ebed9591c400381ae9"

const iv = new Buffer.alloc(16); // fill with zeros


async function main() {
    let encryptedData = fs.readFileSync("./upload/QmUa3Qs97zA943xKqLkJ3Dotz1KAnwn6ywiJHKoVccK45v")
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secret, "hex"), iv);

    let decryptedData = decipher.update(encryptedData, "hex", "hex")
    decryptedData += decipher.final("hex")

    fs.writeFileSync("./upload/new.jpg", Buffer.from(decryptedData, "hex"))
}
main()
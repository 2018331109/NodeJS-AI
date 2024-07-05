const os=require("os")
console.log(os.userInfo())
console.log(os.homedir())
console.log(os.totalmem())
console.log(os.freemem())

// accessing via import (destructuring)

const {totalmem, freemem}=require("os")
console.log(totalmem())
console.log(freemem())

const path=require("path")

console.log(__dirname)
console.log(__filename)


console.log(path)

const extensionName=path.extname("indedx.html")
console.log(extensionName)

const joinName=path.join(__dirname + "/views")
console.log(joinName)
const fs = require('fs')
buffer = fs.readFileSync(process.argv[2])
newLineCount = buffer.toString().split('\n').length - 1
console.log(newLineCount)


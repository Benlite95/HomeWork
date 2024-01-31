const fs = require('fs')

fs.readFile(process.argv[2],"utf8",function(err,data){
    if(err) throw err
    newLineCount = data.split('\n').length - 1
    console.log(newLineCount)
})


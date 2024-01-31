const http = require("http")
let returString = ""
http.get(process.argv[2], function(response) {
    response.setEncoding('utf8')
    response.on('data', data =>returString += data)
    response.on('error', error => console.log(error))
    response.on("end",()=> {
        console.log(returString.length)
        console.log(returString)
    })
}).on('error', error => console.log(error))

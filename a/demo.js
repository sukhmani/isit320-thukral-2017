var fs = require('fs')

fs.readFile('./a/data1.json', 'utf-8',(err,data) =>{
    console.log(data)
})
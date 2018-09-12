var fs = require('fs')
var data1 = require('./data1.json')
console.log(data1.name)

fs.readFile('./a/data1.json', 'utf-8',(err,data1) =>{
    var data1 = JSON.parse(data1)
    console.log(data1.name)
})
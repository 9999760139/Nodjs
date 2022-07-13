const fs = require('fs')

// fs.readFile('app.js', 'utf8', (err,data) =>{
//     console.log(err,data)
// })

// const a = fs.readFileSync('app.js')
// console.log(a.toString())

// fs.writeFile('file.txt', "this is text from fsmodule by fs.write function", () =>{
//     console.log("written to a file content")
// })
const a = fs.writeFileSync('file.txt', "this is text from fsmodule.js by fs.writeFileSync")
console.log(a)
console.log("this is readfile from fsmodule")
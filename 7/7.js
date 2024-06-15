// in this asyncronize type callback function is necesory without callback it gives error.
const fs = require('fs')
fs.writeFile("file.txt","This is file. ",(err)=>{
    console.log("successfully write")
    console.log(err);
})

fs.appendFile("file.txt","This is appended",(err)=>{
    console.log("this appends the text.");
})

fs.readFile("file.txt","utf-8",(err, data)=>{
    console.log(data);
})
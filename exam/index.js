const fs = require("fs");

var str= "";
var a = fs.createReadStream("./exam/sample.txt");
a.setEncoding('utf8');

a.on("data",function(data){
    str+=data;
})
a.on("end",function(){
    console.log(str);
})
a.on("error",function(err){
    console.log(err);
})

// pipe is used to transfer the input file data transfer to output file
// syntext is file1.pipe(file2);
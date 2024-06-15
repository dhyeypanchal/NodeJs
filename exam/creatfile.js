const fs = require("fs");

var str = "";

fs.open("file1.txt",'w',function(err,file){
    if (err) {
        console.log(err);
    }
    else{
        console.log("file created!!!");
    }
})

fs.unlink('file1.txt',function(err){
    if (err) {
        console.log(err);
    }
    else{
        console.log("file deleted!!!");
    }
});
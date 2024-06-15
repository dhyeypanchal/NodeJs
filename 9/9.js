const fs= require('fs')

fs.mkdir("thapa",(err)=>{
    console.log('folder Created');
})

fs.writeFile("./thapa/bio.txt", "This is file. ", (err) => {
    console.log("successfully write")
    // console.log(err);
})

fs.appendFile("./thapa/bio.txt", "This is appended", (err) => {
    console.log("this appends the text.");
})

fs.readFile("./thapa/bio.txt", "utf-8", (err, data) => {
    console.log(data);
})

// fs.unlink("./thapa/bio.txt",(err)=>{
//     console.log("file deleted");
// })

// fs.rmdir("./thapa",(err)=>{
//     console.log("folder deleted");
// })
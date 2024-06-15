const fs =require("fs");

fs.writeFileSync("file.txt","Hello this is file. ");
fs.appendFileSync("file.txt", "This is appended text.")
const buf_data = fs.readFileSync("file.txt");
console.log(buf_data);
console.log(buf_data.toString());

fs.renameSync('file.txt',"readwrite.txt")
const fs = require("fs")
// fs.mkdirSync("thapa")

fs.writeFileSync("./thapa/bio.txt", "Hello my name is Dhyey");

fs.appendFileSync("./thapa/bio.txt"," this is appended text.")

const buf_data = fs.readFileSync("./thapa/bio.txt", "utf-8");
console.log(buf_data);

fs.renameSync('./thapa/bio.txt', "./thapa/Bio.txt")

// fs.unlinkSync('thapa/bio.txt')
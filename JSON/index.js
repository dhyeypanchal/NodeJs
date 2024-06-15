const fs = require("fs")
const biodata={
    name:"dhyey",
    age:18,
    channel:"dhyey panchal"
}

// console.log(biodata.name);

const json = JSON.stringify(biodata); // convert the object in JSON format now we can not access elements like in object.
// console.log(json);

// const obj = JSON.parse(json) // this again converts the json format to object.
// console.log(obj);

// fs.writeFile("json1.json",json, (err)=>{
//     console.log("success");
// })

// i think at a time you can only perform one task either read or write so comment the other code before run the code.

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
    const obj = JSON.parse(data)
    console.log(obj);
})
const express = require('express')

const app = express()

app.get("/",(req,res)=>{
    // res.send("Hello this is home page")
    res.write("<h1>This is heading</h1>")
    res.write("<p>This is paragraph</p>")
    res.send()
})
app.get("/about",(req,res)=>{
    res.status(200).send("Hello this is about page")
})
app.get("/temp",(req,res)=>{
    // res.send([
    //     {
    //         id:1,
    //         name:"Dhyey"
    //     },
    //     {
    //         id: 1,
    //         name: "Dhyey"
    //     },
    //     {
    //         id: 1,
    //         name: "Dhyey"
    //     }
    // ])

    res.json([
        {
            id:1,
            name:"Dhyey"
        },
        {
            id: 1,
            name: "Dhyey"
        },
        {
            id: 1,
            name: "Dhyey"
        }
    ])
})
// both methods are identical when an object or array is passed,
// but res.json() will also convert non-objects,
// such as null and undefinned, which are not valid JSON.

app.listen(80,()=>{
    console.log('successfully run on port no. 80');
})
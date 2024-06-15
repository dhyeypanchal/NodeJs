const express = require('express')
const sendMail = require("./sendMail")

const app = express()

app.get("/",(req,res)=>{
    res.send('Hello this is server')
})
app.get("/mail",sendMail)

app.listen(80,()=>{
    console.log("Server is successfully run on port no. 80");
})
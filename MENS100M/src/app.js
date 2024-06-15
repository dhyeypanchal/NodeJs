const express = require("express");
require("../src/db/conn")
const MensRanking = require("../src/models/mens")

const port = process.env.PORT || 80;
const app = express()

app.use(express.json())

// we will handle post request
app.post("/mens",async(req,res)=>{
    try {
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save()
        res.send(insertMens)
    } catch (error) {
        res.status(400).send(e)   
    }
})

// we will handle get request
app.get("/mens",async(req,res)=>{
    try {
        const getMens = await MensRanking.find().sort({"ranking":1}) // it gives output that start with ranking 1.
        res.send(getMens)
    } catch (error) {
        res.status(400).send(e)   
    }
})

app.listen(port,()=>{
    console.log(`App is successfully running on port ${port}`)
})
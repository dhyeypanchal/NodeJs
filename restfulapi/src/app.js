const express = require("express")
const app = express()
require("./db/conn")
// const Student = require("./models/student")
const studentRouter = require("./routers/student")

const port = process.env.PORT || 80;

app.use(express.json())
app.use(studentRouter)

app.listen(port,()=>{
    console.log(`App is successfully running on port ${port}`);
})
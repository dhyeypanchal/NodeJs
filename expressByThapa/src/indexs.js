// in express js if we want to add dynamic data so we use template engine like pug, ejs and handlebars and for this we use view engine
// i change this file name from index.js to indexs.js because in nodemon its automatically run this file even if i write another file name
const express = require('express')
const path = require("path")

const app = express()
// above line is called middleware
const staticfile = path.join(__dirname, "../public")
app.use(express.static(staticfile))
// console.log(path.join(__dirname, "../public"));

app.get("/", (req, res) => {
    res.send("hello this is home page")
})
app.get("/about", (req, res) => {
    res.status(200).send("Hello this is about page")
})

app.listen(80, () => {
    console.log('successfully run on port no. 80');
})
// in express js if we want to add dynamic data so we use template engine like pug, ejs and handlebars and for this we use view engine
const express = require('express')
const path = require("path")

const app = express()

const templatepath = path.join(__dirname,"../template")
app.set('view engine', "hbs");
// if we want to change the name of views directory to the other name then we have to set name by above code
app.set("views", templatepath)

app.get("/", (req, res) => {
    res.render("index", {
        content: "this is content"
    })
})
app.get("/", (req, res) => {
    res.send("hello this is home page")
})
app.get("/about", (req, res) => {
    res.render("about")
})

app.listen(80, () => {
    console.log('successfully run on port no. 80');
})
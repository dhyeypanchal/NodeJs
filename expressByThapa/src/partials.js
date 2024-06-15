// in express js if we want to add dynamic data so we use template engine like pug, ejs and handlebars and for this we use view engine
// if i want to run nodemon again even if i change the hbs file so we run nodemon like this in outer folder: nodemon src/partials.js -e js,hbs
const express = require('express')
const path = require("path")
const hbs = require("hbs")

const app = express()
const staticpath = path.join(__dirname, "../public")

const templatepath = path.join(__dirname, "../templates/views")
const partialspath= path.join(__dirname, "../templates/partials")
app.set('view engine', "hbs");

// if we want to change the name of views directory to the other name then we have to set name by above code
app.set("views", templatepath)
hbs.registerPartials(partialspath)
app.use(express.static(staticpath))

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
app.get("/about/*", (req, res) => {
    res.render("404",{
        errorcontent:"No such page in about"
    })
})
app.get("*", (req, res) => {
    res.render("404",{
        errorcontent: "404 error not found"
    })
})

app.listen(80, () => {
    console.log('successfully run on port no. 80');
})
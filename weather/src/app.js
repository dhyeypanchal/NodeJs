const express = require("express")
const hbs = require("hbs")
const path = require("path")

const app = express()

app.set('view engine',"hbs")

const staticpath = path.join(__dirname,"../public")
const temppath = path.join(__dirname,"../templates/views")
const partialpath = path.join(__dirname,"../templates/partials")

app.set("views",temppath)
app.use(express.static(staticpath))
hbs.registerPartials(partialpath)

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.listen(80,console.log("sever is running on port no. 80"))
const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
const port = 8000
// saving our public files path like html ,css files to render them on our website
const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../template/views")
const partial_path = path.join(__dirname,"../template/partials")
// view engine initializing
app.set('view engine','hbs')
app.set("views",template_path)
hbs.registerPartials(partial_path)
// rendering our html file to our website
app.use(express.static(static_path))
app.get("/",(req,res)=>{

    res.render("index")
})

app.get("/index",(req,res)=>{

    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("error404",{
        errormsg : "oops page not"
    })
})
app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})
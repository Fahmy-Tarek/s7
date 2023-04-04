

const express = require("express")
// const UserController = require("/..controllerr/UserController")
// 3shan el file hbs e2ra
const path = require("path")
const deal = require("./constroller/dealWithJson")
// 3shan el localStorage 40000
const hbs = require("hbs")
 const app = express()  

 //  mlf el css
const myStaticDir = path.join(__dirname , "../resources/public")
console.log()

//  mlf el home.hbs
const myViewsDir = path.join(__dirname , "../resources/views")

//  mlf el header + footer
const mypartlDir = path.join(__dirname , "../resources/layouts")

// as2l leh sh8lt mlf el css m3 el exprees we leh ast5dmt use msh set (da mlf asasy)
app.use(express.static(myStaticDir))

// bsh5l mlfat el hbs html        as2l leh hna set
app.set("view engine", "hbs")

// gme3 mlfat el hbs ele da5l mlf views  (da mlf asasy)
app.set("views", myViewsDir)

// hna klmt (registerPartials) hya 2ly 5lt mlfat el hbs ely da5l folder layouts 2ly wa5den ns5 le el headr we ba2y m7toa el sf7ay el asasya hbs ely hma [add = all = edit = err404 single] we kman mst5dma fe local storge
hbs.registerPartials(mypartlDir)

// hna ana brbt mlf al [this.all.hbs 2ly hekon asase zy el home r2ese el mtsf7 eft7 3leh hwa 2ol wa7d zy el index]
app.get("/",(rq,res)=>{
    res.render("all", {
        pageTitle:"ALL Data"
    })
})


app.get("/add",(rq,res)=>{
    res.render("add", {
        pageTitle:"Add Data"
    })
})

app.get("/addLogic","deal")
app.get("/single",(rq,res)=>{
    res.render("single", {
        pageTitle:"Single Data"
    })
})



app.get("/edit",(rq,res)=>{
res.render("edit", {
pageTitle:"ALL Data"
})
})


app.get("/del",(rq,res)=>{
res.delete("ell", {

    })
})



app.get("/delall",(rq,res)=>{
    res.render("delAll", {
        pageTitle:"Dell All"
    })
})


app.get("/err404", (req,res)=>{
    res.render("err404",{
    pageTitle:"Eror in page"
})
}),




module.exports = app
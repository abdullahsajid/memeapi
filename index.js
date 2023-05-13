const express = require("express")
const cors = require("cors")
const port = process.env.PORT ||4000
const app = express()
app.use(cors())

const meme = require("./data.json")
const audio = require("./audio.json")

app.get("/",(req,res) => {
    res.send("<h1>Meme Api</h1>") 
})

app.get("/meme",(req,res) => {
    res.send({meme})
})

app.get("/audio", (req,res) => {
    res.send({audio})
})

app.listen(port,() =>{
    console.log("server is running!")
})


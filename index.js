const express = require("express")
const port = process.env.PORT ||4000
const app = express()
const meme = require("./data.json")

app.get("/",(req,res) => {
    res.send("meme api") 
})

app.get("/meme",(req,res)=>{
    res.send({meme})
})

app.listen(port,() =>{
    console.log("server is running!")
})
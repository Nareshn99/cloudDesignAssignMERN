const express=require("express");
const mongoose=require("mongoose");
const route=require("./Route/router");
const app=express();

app.use(express.json())

mongoose.connect("mongodb+srv://Priyanka19:G8reXRlHUbBX65ev@plutonium01.9fxu8wj.mongodb.net/cloudAssugnDB",{
    useNewUrlParser:true
})
.then(()=>console.log("mongoDB connected Successfully"))
.catch((err)=>console.log(err.message))

app.use("/",route)

app.listen(3001,()=>{
    console.log("Express is Running on port 3001")
})
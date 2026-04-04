const express = require("express")
const mongoose = require("mongoose")
const PORT =process.env.PORT || 4000
const DB_USERNAME= "root";
const DB_PASSWORD= "example";
const DB_PORT=27017;
const DB_HOST ="172.18.0.3"
const Uri =`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
console.log("process.env.PORT is ->",process.env.PORT)
console.log("process.env.NODE_ENV is ->",process.env.NODE_ENV)
const app = express()
mongoose.connect(Uri).then(()=> console.log("connected to DB")).catch((error)=> console.log("failed with error ->", error));
app.get("/",(req,res)=>res.send("<h1 style='background-color: black; color: crimson; padding: 10px; border-radius: 8px;'>hi the server ezz is up & running</h1>"))

app.listen(PORT, ()=> console.log(`server is up and running on PORT: ${PORT}`))
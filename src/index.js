const express = require("express")

const PORT =process.env.PORT || 4000
console.log("process.env.PORT is ->",process.env.PORT)
console.log("process.env.NODE_ENV is ->",process.env.NODE_ENV)
const app = express()
app.get("/",(req,res)=>res.send("<h1 style='background-color: black; color: white; padding: 10px; border-radius: 8px;'>hi the server ezz is up & running higher</h1>"))

app.listen(PORT, ()=> console.log(`server is up and running on PORT: ${PORT}`))
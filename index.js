const express = require("express")

const PORT = 4000
const app = express()
app.get("/",(req,res)=>res.send("<h1>hi server is up & running</h1>"))

app.listen(PORT, ()=> console.log(`server is up and running on PORT: ${PORT}`))
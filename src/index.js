const express = require("express")
const {Client:DBClient} = require("pg")
const { createClient } = require("redis")

const client = createClient({ socket: { host: "redis", port: 6379 } })
  .on("error", (err) => console.log("Redis Client Error", err))

client.connect().then(() => {
  client.set("key", "ezz")
    .then(() => client.get("key"))
    .then((value) => {
      console.log("value is ->", value)
    })
})
const PORT =process.env.PORT || 4000
const DB_USERNAME= "root";
const DB_PASSWORD= "example";
const DB_PORT=5432;
const DB_HOST ="postgres"
const Uri =`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
const postgresClient = new DBClient({
  user: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
})
console.log("process.env.PORT is ->",process.env.PORT)
console.log("process.env.NODE_ENV is ->",process.env.NODE_ENV)
const app = express()
postgresClient.connect().then(()=> console.log("connected to DB")).catch((error)=> console.log("failed with error ->", error));
app.get("/",(req,res)=>{
  client.set("products","products....")
  res.send("<h1 style='background-color: black; color: crimson; padding: 10px; border-radius: 8px;'>hi the server ezz is up & running</h1>")
})
app.get("/data", async (req,res)=>{
  const prods = await client.get("products")
  res.send(`<h1 style='background-color: black; color: crimson; padding: 10px; border-radius: 8px;'>hi the server ezz is up & running</h1> </br> <h1>${prods}</h1>`)
})

app.listen(PORT, ()=> console.log(`server is up and running on PORT: ${PORT}`))
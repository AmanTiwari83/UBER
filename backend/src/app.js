const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const  cors = require("cors")
const app = express()
const connectToDb = require("../db/db.js")
const userRoutes = require("../routes/user.routes.js")
const captainRoutes = require("../routes/captain.routes.js")
const cookieParser = require("cookie-parser")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
connectToDb()

app.use("/users",userRoutes)
app.use("/captains",captainRoutes)

app.get("/" , (req,res)=>{
    res.send("Hello")
})


module.exports = app
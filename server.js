//intha if condition vanthu mongodb production la iruka illayanu pakurathuu
if (process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}

//initial setupsssssssssssssssssssssss
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const app = express()
const indexRouter = require("./routes/index")
app.set("view engine","ejs")
app.set("views", __dirname + "/views")
app.set("layout","layouts/layout")
app.use(expressLayouts)

//mongoose connection
const mongoose = require("mongoose")
mongoose.connect(process.env.DatabaseUrl,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.once("open",()=>console.log("connected to mongodb sussusfully"))

//routes originsssssss
app.get("/",indexRouter)

//server running in
app.listen(process.env.PORT || "7000")
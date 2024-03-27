import express from "express";
import mysql from "mysql";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"test"
})

app.use(express.json())
app.use(cookieParser())
app.use("/api/posts",postRoutes)
app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)



app.listen(8800,()=>{
    console.log("connected")
})

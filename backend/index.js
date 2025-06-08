import express from "express";
import dbConnect from "./config/database.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

dbConnect();

app.get("/" , (req , res)=>{
    res.send("<h1>Workify</h1>")
})

app.listen(PORT , ()=>{
    console.log(`the server is running on port ${PORT}`);
})

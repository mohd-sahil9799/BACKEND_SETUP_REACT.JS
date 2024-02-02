import dotenv from "dotenv";
import express from "express";
import DB_CONNECT from "./db/server.js";

dotenv.config({
    path: './env'
})

DB_CONNECT()


const app=express();
const PORT=process.env.PORT || 8000;



app.get("/",(res,req)=>{        
    req.send("<h1>Hello, this is my backend project</h1>")
})
app.get("/",(res,req)=>{
    req.send("<h1>Hello, this is my backend project</h1>")
})

app.listen( PORT ,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);

})
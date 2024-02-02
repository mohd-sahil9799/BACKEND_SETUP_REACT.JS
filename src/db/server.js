import mongoose from "mongoose";
import { DB_NAME } from "../Constants.js";


const DB_CONNECT= async ()=>{
try{
    const connectionInstance= await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`\n MongoDB Connected || DB HOST NAME: ${connectionInstance.connection.host}`)
}
catch(error){
    console.log(`mongoDB Connection Error `, error)
}
}

export default DB_CONNECT


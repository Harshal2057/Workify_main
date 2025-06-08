import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

const dbConnect = async() => {
    
    try{
        await mongoose.connect(DATABASE_URL);
        console.log("database connected successfully !!");
    }catch(error){
        console.log(error);
        console.log("issue occured in database connection !!")
    }

}

export default dbConnect;
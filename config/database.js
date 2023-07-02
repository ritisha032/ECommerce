import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

const dbConnect= async() => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then( () => {console.log("database connected successfully".bgMagenta.white)})
    .catch( (error) => {
        console.log("connection failed").bgRed.white;
        console.log(error.message);
        process.exit(1);

    });
}
export default dbConnect;
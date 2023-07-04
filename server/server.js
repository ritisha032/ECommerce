import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";

const app=express();

dotenv.config();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to ECommerce App</h1>`);
})

const PORT=process.env.PORT || 5000;



import authRoutes from "./routes/authRoutes.js";
app.use("/api/v1",authRoutes);
app.use("/api/v1/category",categoryRoutes);


app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`.bgCyan.white);
})
import dbConnect from "./config/database.js";
dbConnect();
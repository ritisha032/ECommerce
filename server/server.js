import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dbConnect from "./config/database.js";

//instantiating express server
const app = express();



//to use variables inside .env files
dotenv.config();

//middleware
app.use(cors());
app.use(morgan("dev"));

//body parser
app.use(express.json());

//home page
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to ECommerce App</h1>`);
});

const PORT = process.env.PORT || 5000;


//mounting routes
app.use("/api/v1", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON ${PORT}`.bgCyan.white);
});

dbConnect();

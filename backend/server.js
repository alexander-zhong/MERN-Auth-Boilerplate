import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 1235;

const app = express();
connectDB();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Ready for requests"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server start ${port}`));

import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT || 1235;

const app = express();
dotenv.config();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Ready for requests"));

app.listen(port, () => console.log(`Server start ${port}`));

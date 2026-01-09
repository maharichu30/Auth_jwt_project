import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbconfig.js";
import userRouter from "./Routers/userRouter.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Auth project is running");
});

app.use("/api/auth", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server started on port ${PORT}`);
});

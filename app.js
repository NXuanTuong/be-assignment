import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./routers/products";
import userRouter from "./routers/user";
import authRouter from "./routers/auth";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use(authRouter);
mongoose
  .connect("mongodb://127.0.0.1:27017/assignment_Next")
  .then(() => console.log("Kết nối DB thành công"))
  .catch((error) => console.log(error));

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running", PORT);
});

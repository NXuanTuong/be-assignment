import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/assignment-nextjs")
  .then(() => console.log("Kết nối DB thành công"))
  .catch((error) => console.log(error));

app.listen(8000, () => {
  console.log("Server is running 8000");
});

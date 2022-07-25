import express from "express";
import {  signin, signup } from "../controllers/auth";
const authRouter = express()

authRouter.post("/signup",signup)
authRouter.post("/signin",signin)

export default authRouter
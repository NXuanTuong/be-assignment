import express from "express";
import {  signin, signup } from "../controller/auth";
const authRouter = express()

authRouter.post("/register",signup)
authRouter.post("/login",signin)

export default authRouter
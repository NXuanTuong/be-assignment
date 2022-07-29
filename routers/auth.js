import express from "express";
import { getAuth, signin, signup } from "../controllers/auth";
const authRouter = express();

authRouter.post("/auth/signup", signup);
authRouter.get("/auth", getAuth);
authRouter.post("/auth/signin", signin);

export default authRouter;

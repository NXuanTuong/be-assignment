import express from "express";
import { getOneUser, getUser, removeUser, updateInfo, userById } from "../controller/user";
const userRouter = express()

userRouter.get("/users",getUser)
userRouter.get("/users/:id",getOneUser)
userRouter.delete("/users/:id",removeUser)
userRouter.patch("/users/:id",updateInfo)
userRouter.param("userId",userById)
export default userRouter
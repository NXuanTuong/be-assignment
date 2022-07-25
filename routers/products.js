import { Router } from "express";
import { userById } from "../controllers/auth";
import { create, get, list, remove, search, update } from "../controllers/product";
const router = Router();

router.get("/products", list);

router.post("/products", create);

router.get("/products/:id", get);

router.delete("/products/:id", remove);

router.put("/products/:id", update);

router.param("userId", userById)

router.get("/product", search)
export default router;
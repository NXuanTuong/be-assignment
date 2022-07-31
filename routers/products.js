import { Router } from "express";
import {
  create,
  get,
  list,
  remove,
  search,
  update,
} from "../controllers/products";
const router = Router();

router.get("/products", list);

router.post("/products", create);

router.get("/products/:id", get);

router.delete("/products/:id", remove);

router.put("/products/:id", update);

router.get("/products?q", search);
export default router;

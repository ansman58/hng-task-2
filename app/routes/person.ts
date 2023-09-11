import { UserController } from "../controllers/UserController";
import express from "express";

const router = express.Router();

router.get("/", UserController.index);
router.post("/", UserController.store);
router.get("/:id", UserController.show);
router.patch("/:id", UserController.update);
router.delete("/:id", UserController.destroy);

export default router;
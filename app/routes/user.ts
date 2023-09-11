import { UserController } from "../controllers/UserController";
import express from "express";

const router = express.Router();

router.get("/", UserController.index);
router.post("/", UserController.store);
router.get("/:user_id", UserController.show);
router.patch("/:user_id", UserController.update);
router.delete("/:user_id", UserController.destroy);

export default router;
import { PersonController } from "../controllers/PersonController";
import express from "express";

const router = express.Router();

router.get("/", PersonController.index);
router.post("/", PersonController.store);
router.get("/:user_id", PersonController.show);
router.patch("/:user_id", PersonController.update);
router.delete("/:user_id", PersonController.destroy);

export default router;
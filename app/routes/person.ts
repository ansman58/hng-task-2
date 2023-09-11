import { PersonController } from "../controllers/Person";
import express from "express";

const router = express.Router();

router.get("/", PersonController.index);
router.post("/", PersonController.store);
router.get("/:id", PersonController.show);
router.patch("/:id", PersonController.update);
router.delete("/:id", PersonController.destroy);

export default router;
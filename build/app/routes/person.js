"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PersonController_1 = require("../controllers/PersonController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", PersonController_1.PersonController.index);
router.post("/", PersonController_1.PersonController.store);
router.get("/:user_id", PersonController_1.PersonController.show);
router.patch("/:user_id", PersonController_1.PersonController.update);
router.delete("/:user_id", PersonController_1.PersonController.destroy);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const general_1 = require("./app/utils/general");
const person_1 = __importDefault(require("./app/routes/person"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const port = (0, general_1.getEnv)("PORT") || 3100;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api", person_1.default);
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});

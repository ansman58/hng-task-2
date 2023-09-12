"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAString = exports.getEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getEnv(env) {
    return process.env[env] || "";
}
exports.getEnv = getEnv;
function isAString(inputString) {
    return typeof inputString === "string" && inputString.trim() !== "";
}
exports.isAString = isAString;

import dotenv from "dotenv";
import { EnvTypes } from "../interface/envTypes";

dotenv.config();

export function getEnv(env: EnvTypes) {
  return process.env[env] || "";
}

export function isAString(inputString: string) {
  return typeof inputString === "string" && inputString.trim() !== "";
}

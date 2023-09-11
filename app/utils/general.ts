import dotenv from "dotenv";

dotenv.config();

export function getEnv(env: string) {
  return process.env[env] || "";
}

export function isAString(inputString: string) {
  return typeof inputString === "string" && inputString.trim() !== "";
}

import dotenv from "dotenv";

dotenv.config();

export function getEnv(env: string) {
  return process.env[env] || "";
}

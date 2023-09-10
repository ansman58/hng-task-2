import express, { Request, Response } from "express";
import { getEnv } from "./app/utils/general";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = getEnv("PORT") || 3100;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

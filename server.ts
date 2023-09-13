import express, { Request, Response } from "express";
import { getEnv } from "./app/utils/general";
import router from "./app/routes/person";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = getEnv("PORT") || 3100;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api", router);

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Server running on port http://localhost:${port}`);
});

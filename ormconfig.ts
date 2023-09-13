import { getEnv } from "./app/utils/general";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./app/models/Person";
import { User1694465023342 } from "./app/migrations/1694465023342-person";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: getEnv("DB_HOST"),
  username: getEnv("DB_USER"),
  password: getEnv("DB_PASSWORD"),
  database: getEnv("DB_NAME"),
  entities: [Users],
  logging: false,
  migrations: [User1694465023342],
  migrationsTableName: "typeorm-schema",
  migrationsRun: true,
  synchronize: false,
});

(async () => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.log(error);
  }
})();

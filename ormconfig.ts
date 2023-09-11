import { getEnv } from "./app/utils/general";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: getEnv("DB_HOST"),
  username: getEnv("DB_USER"),
  password: getEnv("DB_PASSWORD"),
  database: getEnv("DB_NAME"),
  entities: ["app/models/*.ts"],
  logging: false,
  migrations: ["app/migrations/*.ts"],
  migrationsTableName: "typeorm-schema",
  migrationsRun: true,  
  synchronize: true,
});

(async () => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.log(error);
  }
})();

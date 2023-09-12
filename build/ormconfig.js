"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const general_1 = require("./app/utils/general");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: (0, general_1.getEnv)("DB_HOST"),
    username: (0, general_1.getEnv)("DB_USER"),
    password: (0, general_1.getEnv)("DB_PASSWORD"),
    database: (0, general_1.getEnv)("DB_NAME"),
    entities: ["app/models/*.ts"],
    logging: false,
    migrations: ["app/migrations/*.ts"],
    migrationsTableName: "typeorm-schema",
    migrationsRun: true,
    synchronize: true,
});
(async () => {
    try {
        await exports.AppDataSource.initialize();
    }
    catch (error) {
        console.log(error);
    }
})();

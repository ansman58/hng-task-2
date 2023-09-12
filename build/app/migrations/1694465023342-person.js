"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User1694465023342 = void 0;
const typeorm_1 = require("typeorm");
class User1694465023342 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "user_id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    isNullable: false,
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable: false,
                    default: "CURRENT_TIMESTAMP",
                },
            ],
        }), true);
    }
    async down(queryRunner) { }
}
exports.User1694465023342 = User1694465023342;

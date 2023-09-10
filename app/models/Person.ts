import { Model, DataTypes, CreationOptional } from "sequelize";
import { sequelize } from "../config/database";

export default class Person extends Model {
  declare id: number;
  declare name: string;
  declare age: string;
  declare email: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Person.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, tableName: "person" }
);

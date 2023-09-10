import { Request, Response } from "express";
import { HTTP_STATUS_CODES } from "../constants";
import { Person } from "../models/Person";

const {
  OK,
  CREATED,
  ACCEPTED,
  NO_CONTENT,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  METHOD_NOT_ALLOWED,
  CONFLICT,
  INTERNAL_SERVER_ERROR,
} = HTTP_STATUS_CODES;

export class PersonCotroller {
  static async store(req: Request, res: Response) {
    const { name, age, email } = req.body;

    if (!name) {
      return res.status(BAD_REQUEST).json({ message: "Name is required" });
    }

    try {
      const userData = {
        name,
        age,
        email,
      };
      const user = await Person.create(userData);

      await user.save();

      res.status(CREATED).json({ message: "User created successfully", user });
    } catch (error) {
      console.log(error);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error" });
    }
  }

  static async index() {}

  static async show() {}

  static async update() {}

  static async destroy() {}
}

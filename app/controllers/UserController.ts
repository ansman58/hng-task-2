import { Request, Response } from "express";
import { HTTP_STATUS_CODES } from "../constants";
import { AppDataSource } from "../config/database";
import { User } from "../models/User";
import { isAString } from "../utils/general";

const { OK, CREATED, ACCEPTED, BAD_REQUEST, NOT_FOUND, INTERNAL_SERVER_ERROR } =
  HTTP_STATUS_CODES;

export class UserController {
  static async store(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.status(BAD_REQUEST).json({ message: "Name is required" });
    }

    if (!isAString(name)) {
      return res.status(BAD_REQUEST).json({ message: "Name must be a string" });
    }

    try {
      const userModel = AppDataSource.getRepository(User);

      const findUser = await userModel.findOneBy({ name });

      if (findUser) {
        return res.status(BAD_REQUEST).json({ message: "Name already exists" });
      }

      const user = new User();
      user.name = name;
      const newUser = await userModel.save(user);

      res
        .status(CREATED)
        .json({ message: "User created successfully", newUser });
    } catch (error) {
      UserController.handleServerError(res, error);
    }
  }

  static async index(req: Request, res: Response) {
    try {
      const getUsers = AppDataSource.getRepository(User);

      const users = await getUsers.find();
      res.status(OK).json({ message: "Users fetched successfully", users });
    } catch (error) {
      UserController.handleServerError(res, error);
    }
  }

  static async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userModel = AppDataSource.getRepository(User);
      const user = await userModel.findOneBy({ id: Number(id) });
      if (!user) {
        return res.status(NOT_FOUND).json({ message: "User not found" });
      }
      res.status(OK).json({ message: "User fetched successfully", user });
    } catch (error) {
      UserController.handleServerError(res, error);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userModel = AppDataSource.getRepository(User);
      const userToUpdate = await userModel.findOneBy({ id: Number(id) });
      if (!userToUpdate) {
        return res.status(NOT_FOUND).json({ message: "User not found" });
      }
      userToUpdate.name = req.body.name;

      const user = await userModel.save(userToUpdate);

      res.status(ACCEPTED).json({ message: "User updated successfully", user });
    } catch (error) {
      UserController.handleServerError(res, error);
    }
  }

  static async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userModel = AppDataSource.getRepository(User);
      const userToRemove = await userModel.findOneBy({ id: Number(id) });

      if (!userToRemove) {
        return res.status(NOT_FOUND).json({ message: "User not found" });
      }
      userModel.remove(userToRemove);
      res.status(OK).json({ message: "User deleted successfully" });
    } catch (error) {
      UserController.handleServerError(res, error);
    }
  }

  static handleServerError(res: Response, error: Error) {
    console.error(`Error in UserController: ${error.message}`);
    return res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}

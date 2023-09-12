import { Request, Response } from "express";
import { HTTP_STATUS_CODES } from "../constants";
import { AppDataSource } from "../../ormconfig";
import { User } from "../models/Person";
import { isAString } from "../utils/general";

const { OK, CREATED, ACCEPTED, BAD_REQUEST, NOT_FOUND, INTERNAL_SERVER_ERROR } =
  HTTP_STATUS_CODES;

export class PersonController {
  static async store(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.status(BAD_REQUEST).json({ error: "Name is required" });
    }

    if (!isAString(name)) {
      return res.status(BAD_REQUEST).json({ error: "Name must be a string" });
    }

    try {
      const userModel = AppDataSource.getRepository(User);

      const findUser = await userModel.findOneBy({ name });

      if (findUser) {
        return res.status(BAD_REQUEST).json({ error: "Name already exists" });
      }

      const user = new User();
      user.name = name;
      const newUser = await userModel.save(user);

      res
        .status(CREATED)
        .json({ message: "User created successfully", newUser });
    } catch (error) {
      PersonController.handleServerError(res, error);
    }
  }

  static async index(req: Request, res: Response) {
    try {
      const getUsers = AppDataSource.getRepository(User);

      const users = await getUsers.find();
      res.status(OK).json({ message: "Users fetched successfully", users });
    } catch (error) {
      PersonController.handleServerError(res, error);
    }
  }

  static async show(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const userModel = AppDataSource.getRepository(User);
      const user = await userModel.findOneBy({ user_id: Number(user_id) });
      if (!user) {
        return res.status(NOT_FOUND).json({ error: "User not found" });
      }
      res.status(OK).json({ message: "User fetched successfully", user });
    } catch (error) {
      PersonController.handleServerError(res, error);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const userModel = AppDataSource.getRepository(User);
      const userToUpdate = await userModel.findOneBy({
        user_id: Number(user_id),
      });
      if (!userToUpdate) {
        return res.status(NOT_FOUND).json({ error: "User not found" });
      }
      userToUpdate.name = req.body.name;

      const user = await userModel.save(userToUpdate);

      res.status(ACCEPTED).json({ message: "User updated successfully", user });
    } catch (error) {
      PersonController.handleServerError(res, error);
    }
  }

  static async destroy(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const userModel = AppDataSource.getRepository(User);
      const userToRemove = await userModel.findOneBy({
        user_id: Number(user_id),
      });

      if (!userToRemove) {
        return res.status(NOT_FOUND).json({ error: "User not found" });
      }
      userModel.remove(userToRemove);
      res.status(OK).json({ message: "User deleted successfully" });
    } catch (error) {
      PersonController.handleServerError(res, error);
    }
  }

  static handleServerError(res: Response, error: Error) {
    console.error(`Error in PersonController: ${error.message}`);
    return res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const constants_1 = require("../constants");
const ormconfig_1 = require("../../ormconfig");
const Person_1 = require("../models/Person");
const general_1 = require("../utils/general");
const { OK, CREATED, ACCEPTED, BAD_REQUEST, NOT_FOUND, INTERNAL_SERVER_ERROR } = constants_1.HTTP_STATUS_CODES;
class PersonController {
    static async store(req, res) {
        const { name } = req.body;
        if (!name) {
            return res.status(BAD_REQUEST).json({ error: "Name is required" });
        }
        if (!(0, general_1.isAString)(name)) {
            return res.status(BAD_REQUEST).json({ error: "Name must be a string" });
        }
        try {
            const userModel = ormconfig_1.AppDataSource.getRepository(Person_1.User);
            const findUser = await userModel.findOneBy({ name });
            if (findUser) {
                return res.status(BAD_REQUEST).json({ error: "Name already exists" });
            }
            const user = new Person_1.User();
            user.name = name;
            const newUser = await userModel.save(user);
            res
                .status(CREATED)
                .json({ message: "User created successfully", newUser });
        }
        catch (error) {
            PersonController.handleServerError(res, error);
        }
    }
    static async index(req, res) {
        try {
            const getUsers = ormconfig_1.AppDataSource.getRepository(Person_1.User);
            const users = await getUsers.find();
            res.status(OK).json({ message: "Users fetched successfully", users });
        }
        catch (error) {
            PersonController.handleServerError(res, error);
        }
    }
    static async show(req, res) {
        try {
            const { user_id } = req.params;
            const userModel = ormconfig_1.AppDataSource.getRepository(Person_1.User);
            const user = await userModel.findOneBy({ user_id: Number(user_id) });
            if (!user) {
                return res.status(NOT_FOUND).json({ error: "User not found" });
            }
            res.status(OK).json({ message: "User fetched successfully", user });
        }
        catch (error) {
            PersonController.handleServerError(res, error);
        }
    }
    static async update(req, res) {
        try {
            const { user_id } = req.params;
            const userModel = ormconfig_1.AppDataSource.getRepository(Person_1.User);
            const userToUpdate = await userModel.findOneBy({
                user_id: Number(user_id),
            });
            if (!userToUpdate) {
                return res.status(NOT_FOUND).json({ error: "User not found" });
            }
            userToUpdate.name = req.body.name;
            const user = await userModel.save(userToUpdate);
            res.status(ACCEPTED).json({ message: "User updated successfully", user });
        }
        catch (error) {
            PersonController.handleServerError(res, error);
        }
    }
    static async destroy(req, res) {
        try {
            const { user_id } = req.params;
            const userModel = ormconfig_1.AppDataSource.getRepository(Person_1.User);
            const userToRemove = await userModel.findOneBy({
                user_id: Number(user_id),
            });
            if (!userToRemove) {
                return res.status(NOT_FOUND).json({ error: "User not found" });
            }
            userModel.remove(userToRemove);
            res.status(OK).json({ message: "User deleted successfully" });
        }
        catch (error) {
            PersonController.handleServerError(res, error);
        }
    }
    static handleServerError(res, error) {
        console.error(`Error in PersonController: ${error.message}`);
        return res
            .status(INTERNAL_SERVER_ERROR)
            .json({ message: "Internal server error" });
    }
}
exports.PersonController = PersonController;

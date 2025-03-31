import express from "express";
import { UserController } from "../controllers/users.controller";

export const userRoutes = express.Router();

userRoutes.get('/users', UserController.getAllUser);
userRoutes.get('/users/:id', UserController.getUserById);
userRoutes.post('/users', UserController.createUser);
userRoutes.put('/users/:id', UserController.updateUser);
userRoutes.delete('/users/:id', UserController.deleteUser);
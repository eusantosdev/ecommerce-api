import express, { Request, Response } from 'express';
import { UsersControllers } from '../controllers/users.controllers';

export const userRoutes = express.Router();

userRoutes.get('/users', UsersControllers.getAllUsers);
userRoutes.get('/users/:id', UsersControllers.getUserById);
userRoutes.post('/users', UsersControllers.createUser);

userRoutes.put('/users/:id', (req: Request, res: Response) => {
    try {
        
        
    } catch (error) {
        console.log(`Erro ao editar o usuario ${error}`);
        res.status(500).send({
            message: 'Erro ao editar o usuario'
        });
    }
});
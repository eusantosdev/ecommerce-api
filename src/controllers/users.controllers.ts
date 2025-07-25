import { Request, Response } from 'express';

const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    }
];

type User = {
    id: number;
    name: string,
    email: string
}

export class UsersControllers {
    static getAllUsers = (req: Request, res: Response) => {
        try {
            
        } catch (error) {
            console.log(`Error: ${error}`);
            res.status(500).send({
                message: `Internal Server Error`
            });
        }
    }

    static getUserById = (req: Request, res: Response) => {
        try {
            //let { id } = req.params;
            
        } catch (error) {
            console.log(`Erro: ${error}`);
            res.status(500).send({
                message: `Internal Server Error`
            });
        }
    }

    static createUser = (req: Request, res: Response) => {
        try {
            let { name, email } = req.body as User;

            const newUser = {
                id: users.length + 1,
                name,
                email
            }

            users.push(newUser);

        res.status(201).send({
            message: `Usuario ${newUser.id} criado!`,
        });
        } catch (error) {
            console.log(`Erro ao criar o usuario ${error}`);
            res.status(500).send({
                message: 'Erro ao criar o usuario'
            });
        }
    }
}


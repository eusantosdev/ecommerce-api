import { Request, Response } from 'express';

type User = {
    id: number,
    nome: string,
    email: string,
};

let usuarios: User[] = [];

export class UserController {
    static getAllUser(req: Request, res: Response) {
        res.send(usuarios);
    }

    static getUserById(req: Request, res: Response) {
        let { id } = req.params
        const userId = usuarios.filter(user => user.id === Number(id));
        res.send(userId);
    }

    static createUser(req: Request, res: Response) {
        let { nome, email } = req.body;
        const newUser = {
            id: usuarios.length + 1,
            nome: nome,
            email: email,
        }
        usuarios.push(newUser);
        res.send({
            message: `Usuario ${newUser.id} criado!`,
        });
    }

    static updateUser(req: Request, res: Response) {
        let { id } = req.params;
        let user = req.body as User;
        let indexOfUser = usuarios.findIndex((_user: User) => user.id === Number(id));
        usuarios[indexOfUser].nome = user.nome;
        usuarios[indexOfUser].email = user.email;
        res.send({
            message: `Dados de usuario ${id} atualizados!`
        });
    }

    static deleteUser(req: Request, res: Response) {
        let { id } = req.params;
        let indexOfUser = usuarios.findIndex((_user: User) => _user.id === Number(id));
        usuarios.splice(indexOfUser, 1);
        res.send({
            message: `Usuario ${id} deletado!`
        });
    }
}

import { Request, Response } from 'express';
import { getFirestore } from "firebase-admin/firestore";

type User = {
    id: number,
    nome: string,
    email: string,
};

export class UserController {
    static async getAllUser(req: Request, res: Response) {
        const snapshot = await getFirestore().collection('users').get();
        const users = snapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            };
        });
        res.status(200).send({
            users
        });
    }

    static async getUserById(req: Request, res: Response) {
        let { id } = req.params;
        const doc = await getFirestore().collection("users").doc(id).get();
        let userById = {
            id: doc.id,
            ...doc.data()
        }
        res.send(userById);
    }

    static async createUser(req: Request, res: Response) {
        let { nome, email } = req.body as User;
        const newUser = await getFirestore().collection("users").add({
            nome: nome, 
            email: email
        });
        res.status(201).send({
            message: `Usuario ${newUser.id} criado!`,
        });
    }

    static async updateUser(req: Request, res: Response) {
        let { id } = req.params;
        let { nome, email } = req.body as User;
        await getFirestore().collection("users").doc(id).set({
            nome: nome,
            email: email
        })
        res.send({
            message: `Dados do usuario ${id} atualizados!`
        });
    }

    static async deleteUser(req: Request, res: Response) {
        let { id } = req.params;
        await getFirestore().collection("users").doc(id).delete();
        res.status(204).end();
    }
}

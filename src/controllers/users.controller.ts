import { Request, Response } from 'express';
import { getFirestore } from "firebase-admin/firestore";

type User = {
    id: number,
    nome: string,
    email: string,
};

export class UserController {
    static async getAllUser(req: Request, res: Response) {
        try {
            const snapshot = await getFirestore().collection('users').get();
            const users = snapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            };
        });
        res.status(200).send(users);
        } catch (error) {
            res.status(500).send({
                message: `Erro interno no servidor!`
            });
        }
    }

    static async getUserById(req: Request, res: Response) {
        try {
            let { id } = req.params;
            const doc = await getFirestore().collection("users").doc(id).get();
            let userById = {
                id: doc.id,
                ...doc.data()
            }
            res.status(200).send(userById);
        } catch (error) {
            res.status(500).send({
                message: `Erro interno no servidor!`
            });
        }
    }

    static async createUser(req: Request, res: Response) {
        try {
            let { nome, email } = req.body as User;
            const newUser = await getFirestore().collection("users").add({
                nome: nome, 
                email: email
            });
            res.status(201).send({
                message: `Usuario ${newUser.id} criado!`,
            });
        } catch (error) {
            res.status(500).send({
                message: `Erro interno no servidor!`
            });
        }
    }

    static async updateUser(req: Request, res: Response) {
        try {
            let { id } = req.params;
            let { nome, email } = req.body as User;
            await getFirestore().collection("users").doc(id).set({
                nome: nome,
                email: email
            })
            res.send({
                message: `Dados do usuario ${id} atualizados!`
            });
        } catch (error) {
            res.status(500).send({
                message: `Erro interno no servidor!`
            });
        }
    }

    static async deleteUser(req: Request, res: Response) {
        try {
            let { id } = req.params;
            await getFirestore().collection("users").doc(id).delete();
            res.status(204).end();
        } catch (error) {
            res.status(500).send({
                message: `Erro interno no servidor!`
            });
        }
    }
}

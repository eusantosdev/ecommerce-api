import express, { Request, Response } from 'express';

const app = express();

let usuarios = [
    { 
        id: 1, 
        nome: 'João', 
        idade: 18 
    }
];

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.get('/users', (req: Request, res: Response) => {
    res.send(usuarios);
});

app.get('/users/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    const userId = usuarios.filter(user => user.id === Number(id));
    res.send(userId);
});

app.listen(3000, () => {
    console.log('Servidor rodando!');
});
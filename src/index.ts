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

app.post('/users', (req: Request, res: Response) => {
    const { nome, idade } = req.body;
    const newUser = usuarios.push({
        id: usuarios.length + 1,
        nome: nome,
        idade: idade
    });
    res.send({
        message: 'Novo usuario criado!',
        newUser
    });
})

app.listen(3000, () => {
    console.log('Servidor rodando!');
});
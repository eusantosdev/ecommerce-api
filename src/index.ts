import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

type User = {
    id: number,
    nome: string,
    email: string,
    idade: number
}

let usuarios: User[] = [];

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.get('/users', (req: Request, res: Response) => {
    res.send(usuarios);
});

app.get('/users/:id', (req: Request, res: Response) => {
    let { id } = req.params
    const userId = usuarios.filter(user => user.id === Number(id));
    res.send(userId);
});

app.post('/users', (req: Request, res: Response) => {
    let { nome, email, idade } = req.body;
    const newUser = {
        id: usuarios.length + 1,
        nome: nome,
        email: email,
        idade: idade
    }
    usuarios.push(newUser);
    res.send({
        message: `Usuario ${newUser.id} criado!`,
    });
});

app.put('/users/:id', (req: Request, res: Response) => {
    let { id } = req.params;
    let user = req.body;
    let userIndex = usuarios.findIndex((_user: User) => user.id === Number(id));
    usuarios[userIndex].nome = user.nome;
    usuarios[userIndex].email = user.email;
    usuarios[userIndex].idade = user.idade;
    res.send({
        message: `Dados de usuario ${id} atualizados!`
    })
})

app.delete('/users/:id', (req: Request, res: Response) => {
    let { id } = req.params;
    usuarios.filter(user => user.id !== Number(id));
    res.send({
        message: 'Usuario deletado!'
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando!');
});
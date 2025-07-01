import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

const hostname = '127.0.0.1';
const port = 3000;

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

app.get('/', (req: Request, res: Response) => {
    try {
        res.status(201).send(`Hello Wolrd`);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).send({
            message: `Internal Server Error`
        });
    }
});

app.get('/users', (req: Request, res: Response) => {
    try {
        res.status(201).send(users);
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).send({
            message: `Internal Server Error`
        });
    }
});

app.get('/users/:id', (req: Request, res: Response) => {
    try {
        let { id } = req.params;
        let user = users.find(user => user.id === parseInt(id));
        res.send(user);
    } catch (error) {
        console.log(`Erro: ${error}`);
        res.status(500).send({
            message: `Internal Server Error`
        });
    }
});

app.post('/users', (req: Request, res: Response) => {
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
});

app.put('/users/:id', (req: Request, res: Response) => {
    try {
        
        
    } catch (error) {
        console.log(`Erro ao editar o usuario ${error}`);
        res.status(500).send({
            message: 'Erro ao editar o usuario'
        });
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
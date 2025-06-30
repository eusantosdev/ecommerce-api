import express, { Request, Response } from 'express';

const app = express();

const hostname = '127.0.0.1';
const port = 300;

app.get('/', (req: Request, res: Response) => {
    res.send(`Hello Wolrd`);
});

app.get('/users', (req: Request, res: Response) => {
    res.send('Usuarios');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
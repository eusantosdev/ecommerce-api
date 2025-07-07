import express from 'express';
import { routes } from './routes';
import { connectDataBase } from './config/database';

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

connectDataBase();

routes(app);

app.listen(port, hostname, () => {
    console.log(`Running server http://${hostname}:${port}/`);
});
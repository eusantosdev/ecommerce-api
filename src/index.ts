import express from 'express';
import { routes } from './routes/index.routes';

const app = express();

app.use(express.json());

routes(app);

app.listen((3000), () => {
    console.log('Servidor rodando!');
});
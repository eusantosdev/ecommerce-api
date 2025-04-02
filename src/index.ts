import express from 'express';
import { initializeApp } from 'firebase-admin/app';
import { routes } from './routes/index.routes';
import { errorHandle } from './middlewares/error-handle.middleware';

initializeApp();
const app = express();

routes(app);
errorHandle(app);

app.listen((3000), () => {
    console.log('Servidor rodando!');
});
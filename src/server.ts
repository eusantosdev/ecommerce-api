import express from 'express';
import { routes } from './routes';

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

routes(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
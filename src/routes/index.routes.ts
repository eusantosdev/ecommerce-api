import express  from 'express';
import { userRoutes } from './user.routes';

export const routes = (app: express.Express) => {
    app.use(express.json());
    app.use(
       userRoutes
    );
}
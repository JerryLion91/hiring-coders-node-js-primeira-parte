import { Router } from "express";
import Database from './database';
import multer from 'multer';

import UserController from "./app/controllers/UserController";
import SessionController from './app/controllers/SessionController'
import authMiddleware from './app/middlewares/auth'
import multerConfig from "./config/multer"

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

// Rotas autenticadas
routes.use(authMiddleware);
routes.put("/users", UserController.update);

// Upload de arquivos
routes.post('/files', upload.single('file'), (req, res) =>{
    return res.json({message: 'Tudo ok'});
})
export default routes;

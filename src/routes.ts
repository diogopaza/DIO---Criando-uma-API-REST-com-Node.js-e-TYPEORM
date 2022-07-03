import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreaterUserController';

const router = Router();
const createUserController = new CreateUserController;

router.get('/', (req: Request, res: Response) => {
    //return res.json({mensagem: 'Bem vindo a nossa DIO API'})
    res.end('Bem vindo a nossa DIO API')
})

router.post('/usuarios',  createUserController.handle)

export { router }
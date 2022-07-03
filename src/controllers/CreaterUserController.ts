import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserServices';

class CreateUserController {
    handle(req: Request, res: Response) {
        const createUserServices = new CreateUserService;
        const nome = req.body.nome
        const email = req.body.email
        if (nome.length == 0 || email.length == 0) {
            return res.status(400).json({ mensagem: 'Informe um nome de usuario e um email' })
        }
        const user = createUserServices.execute({nome,email})
        return res.status(201).json({user})
    }
}

export { CreateUserController }


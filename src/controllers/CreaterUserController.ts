import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { CreateUserService } from '../services/CreateUserServices';

class CreateUserController {
   async handle(req: Request, res: Response) {
        const createUserServices = new CreateUserService;
        const nome = req.body.nome
        const email = req.body.email
        const id = uuid()
        console.log("UUID: " + id)
        if (nome.length == 0 ) {
            return res.status(400).json({ mensagem: 'Informe um nome de usuario e um email' })
        }
        const user = await createUserServices.execute({id, nome,email})
        return res.status(201).json({user})
    }
}

export { CreateUserController }


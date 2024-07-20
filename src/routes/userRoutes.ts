import { Application, Router } from 'express';
import { UserController } from '../controllers/userController';

export class UserRoutes{
    public userController: UserController = new UserController();
    public router:Router
    constructor(){
        this.router = Router();
        this.routes();
    }
    public routes(){
        this.router.get('/',this.userController.getUsers);
        this.router.post('/',this.userController.addUser);
        this.router.delete('/', this.userController.deleteAll);
        this.router.get('/:id', this.userController.getUser)
        this.router.put('/:id', this.userController.updateUser)
        this.router.delete('/:id', this.userController.deleteUser);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;
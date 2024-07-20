import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import Database from './config/database';
import { authMiddleware } from './middleware/authMiddleware';

class App{
    public app: Application;
        constructor(){
        this.app = express();
        Database;
        this.config();
        this.routes();
    }
    private config(): void{
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
        this.app.use(helmet());
    }
    private routes(): void {
        this.app.use('/auth', authRoutes);
        this.app.use(authMiddleware)
        this.app.use('/users', userRoutes);
      }
}

export default new App().app;
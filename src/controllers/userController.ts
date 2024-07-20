import { Request, Response } from 'express';
import { User, IUser } from '../models/User';

export class UserController {
  public async getUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user: IUser | null = await User.findById(id);
      if (user === null) {
        res.status(404).send('No users found');
      }else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
  public async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users: IUser[] = await User.find();
      if (users.length === 0) {
        res.status(404).send('No users found');
      }else {
        res.status(200).json(users);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async addUser(req: Request, res: Response): Promise<void> {
    try {
      const newUser = new User(req.body);
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { body } = req;
      const updated = await User.findByIdAndUpdate(id, body, { new: true });
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updated = await User.findByIdAndDelete(id);
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  public async deleteAll(req: Request, res: Response): Promise<void> {
    try {
      const updated = await User.deleteMany({});
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

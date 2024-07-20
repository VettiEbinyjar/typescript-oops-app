import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/User';

const SECRET_KEY = process.env.SECRET_KEY || 'secret';

export class AuthController {
  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password, age } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(400).json({ message: 'User already exists' });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({ name, email, age, password: hashedPassword });
      const savedUser = await newUser.save();

      const token = jwt.sign({ id: savedUser._id }, SECRET_KEY, { expiresIn: '1h' });

      res.status(201).json({ token });
    } catch (error) {
        console.log(error);
      res.status(500).send(error);
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ message: 'Invalid email or password' });
        return;
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: 'Invalid email or password' });
        return;
      }

      const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });

      res.status(200).json({ token });
    } catch (error) {
        res.status(500).send(error);
    }
  }

  public async getProfile(req: AuthRequest, res: Response): Promise<void> {
    try {
      const user = await User.findById(req.userId).select('-password');
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

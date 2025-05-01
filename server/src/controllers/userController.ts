import { User } from '../models/userModel';

import { Request, Response, NextFunction, RequestHandler } from 'express';

export const registerUser: RequestHandler = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        res.status(400).json({ message: 'User already exists' });
        return;
      }
      const user = await User.create({ name, email, password });
  
      res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  };
  

  export const loginUser: RequestHandler = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        res.status(401).json({ message: 'Invalid email or password' });
        return;
      }
  
      // Password check (later you should hash passwords)
      if (user.password !== password) {
        res.status(401).json({ message: 'Invalid email or password' });
        return;
      }
  
      res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email,
      });
    } catch (error: any) {
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };



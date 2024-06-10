// pages/api/register.ts

import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import user from '../../models/User';
import { v4 as uuidv4 } from 'uuid';

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      
      const { firstName, 
              lastName, 
              username, 
              email,
              password,
              confirmPassword } = req.body; 

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Generate a UUIDv4
      const id: string = uuidv4();
      // Create new user
      const newUser = await user.create({
        id,
        firstName, 
        lastName, 
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default registerHandler;

// pages/api/login.ts

import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/User';
import { generateToken, verifyToken } from '../../utils/jwt';

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const user = await User.findByUsername(username);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isValidPassword = await user.validatePassword(password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      const token : any = generateToken(user.id);
      res.json({ token });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default loginHandler;

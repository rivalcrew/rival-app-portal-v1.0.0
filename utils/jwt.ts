import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const secretKey = 'your-secret-key';

interface JwtPayload {
  userId: string;
}

export function generateToken(userId: string): string {
  const payload: JwtPayload = { userId };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    const payload = jwt.verify(token, secretKey) as JwtPayload;
    return payload;
  } catch (error) {
    return null;
  }
}

// Middleware to extract token from Bearer token request
export function getUserByToken (req: NextApiRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    try {
        const decoded = jwt.verify(token, secretKey);
        // Access user ID or any other data from the decoded payload
        const userId = (decoded as { userId: number }).userId;
        return userId;
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

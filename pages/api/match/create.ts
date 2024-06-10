// api/match/create

import { NextApiRequest, NextApiResponse } from 'next';
import Match from '../../../models/Match';
import { v4 as uuidv4 } from 'uuid';
import { getUserByToken } from '../../../utils/jwt';

// TODO create by who ?
const createHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const userId : any = getUserByToken(req, res);

        try {
            const {
                startOn,
                expiredOn,
                timeStart,
                timeEnd,
                venueId,
                hostTeamId,
                status,
              } = req.body;

            const id: string = uuidv4();
            const data = await Match.create({
                id,
                startOn,
                expiredOn,
                timeStart,
                timeEnd,
                venueId,
                hostTeamId,
                status, 
                userId : userId
            });

            res.status(201).json({ data });
        } catch (error) {
            console.error('Error creating team:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
        } else {
        res.status(405).json({ message: 'Method not allowed' });
        }
};
export default createHandler;
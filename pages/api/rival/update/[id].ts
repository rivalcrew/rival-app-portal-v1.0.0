// pages/api/teams/update/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import MatchRequest from '@/models/MatchRequest';


// TODO update by who ?
const updateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const {
            query: { id },
            body,
          } = req;

        try {
            // Update team by id
            const updatedTeam = await MatchRequest.update(body, {
              where: { id: id },
            });
            if (updatedTeam[0] === 0) {
              res.status(404).json({ message: 'Venue not found' });
            } else {
              res.status(200).json({ message: 'Venue updated successfully' });
            }
          } catch (error) {
            console.error('Error updating venue:', error);
            res.status(500).json({ message: 'Internal server error' });
          }
        } else {
        res.status(405).json({ message: 'Method not allowed' });
        }
};
export default updateHandler;
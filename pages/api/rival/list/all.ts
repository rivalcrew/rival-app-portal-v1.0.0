import { NextApiRequest, NextApiResponse } from 'next';
import MatchRequest from '@/models/MatchRequest';

// Handler function for GET requests
const listHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            // get list of team
            const detailTeam = await MatchRequest.findAll({
                where: {
                  deleted: false
                }
              });
            if (detailTeam == null) {
              res.status(404).json({ message: 'Rivals not found' });
            } else {
              res.status(200).json({ data: detailTeam });
            }
          } catch (error) {
            console.error('Error get rivals:', error);
            res.status(500).json({ message: 'Internal server error' });
          }
        } else {
        res.status(405).json({ message: 'Method not allowed' });
        }
}
export default listHandler;
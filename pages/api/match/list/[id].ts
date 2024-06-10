import { NextApiRequest, NextApiResponse } from 'next';
import Match from '../../../../models/Match';

// Handler function for GET requests
const listHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const {
            query: { id },
            body,
          } = req;

        try {
            // get list of team
            const detailTeam = await Match.findAll({
                where: { 
                  userId: id ,
                  deleted: false
                }
              });
            if (detailTeam == null) {
              res.status(404).json({ message: 'Match not found' });
            } else {
              res.status(200).json({ data: detailTeam });
            }
          } catch (error) {
            console.error('Error get team:', error);
            res.status(500).json({ message: 'Internal server error' });
          }
        } else {
        res.status(405).json({ message: 'Method not allowed' });
        }
}
export default listHandler;
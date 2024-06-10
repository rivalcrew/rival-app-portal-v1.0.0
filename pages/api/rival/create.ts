// api/rival/create

import { NextApiRequest, NextApiResponse } from 'next';
import MatchRequest from '../../../models/MatchRequest';
import { v4 as uuidv4 } from 'uuid';
import { getUserByToken } from '../../../utils/jwt';
import { isMatchExist} from '../../../services/matchServices';
import { Status  } from '../../../enum/status';

// TODO create by who ?
const createHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        var  userID : any ;
        
        try {
            const {
                matchId,
                teamId,
                userId,
              } = req.body;

            if (userId == null || userId == "") {
                userID = getUserByToken(req, res);
            } else { userID = userId}

            // check if macth valid
            const isMatch = await isMatchExist(matchId);
            if(!isMatch) {
                res.status(404).json({ message: 'Matches not found' });
            }

            //TODO
            // check if team valid

            const id: string = uuidv4();
            const data = await MatchRequest.create({
                id,
                matchId,
                teamId,
                userId : userID,
                status: Status.SENDING
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
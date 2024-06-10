import Match from '@/models/Match';
import MatchRequest from '@/models/MatchRequest';

//  Match Service
export async function getMatchesByUserId(id:string) : Promise<Match[]>{
    const match = await Match.findAllByUserId(id);
    if (match != null) {
        return match;
    }
    return [];
}

export async function getRivalByMatches( matches:Match[]) : Promise<Boolean>{

    //make list variable
    // loop match and save to list
    matches.forEach((match) => {
        const result =  MatchRequest.findById(match.id);
        if (result != null) {
            return true;
        }
        return false;
        console.log(match);
    });
    
}



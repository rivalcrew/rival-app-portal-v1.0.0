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

// masso comment bceaus forgot what is this for
// export async function getRivalByMatches( matches:Match[]) : Promise<>{

//     //make list variable
//     // loop match and save to list
//     matches.forEach((match) => {
//         const result =  MatchRequest.findById(match.id);
//         if (result != null) {
//             return true;
//         }
//         return false;
//     });
    
// }



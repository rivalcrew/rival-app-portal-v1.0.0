import Match from '../models/Match'

//  Match Service
export async function isMatchExist(id:string) : Promise<Boolean>{
    const match = await Match.findById(id);
    if (match != null) {
        return true;
    }
    return false;
}
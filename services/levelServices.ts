import Level from '../models/Level'

// Level of utils
export async function getBeginnerId() :  Promise<string>{
    const level = await Level.findByRank(1);
    if (level != null) {
        return level.id;
    }
    return "";
}
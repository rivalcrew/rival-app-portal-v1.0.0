import Status from '../models/Status'

//  Rival Services
// SENDING, ACCEPTED, REJECTED
export async function getSendingId() :  Promise<string>{
    const status = await Status.findByType("SENDING");
    if (status != null) {
        return status.id;
    }
    return "";
}

export async function getAcceptedId() :  Promise<string>{
    const status = await Status.findByType("ACCEPTED");
    if (status != null) {
        return status.id;
    }
    return "";
}

export async function getRejectedId() :  Promise<string>{
    const status = await Status.findByType("REJECTED");
    if (status != null) {
        return status.id;
    }
    return "";
}
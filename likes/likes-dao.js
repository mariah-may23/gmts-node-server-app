import likesModel from "./likes-model.js";

export const userLikesSneaker = async (uid, sid) => {
    return await likesModel.create({user: uid, sneaker: sid})
}
export const userUnlikesSneaker = async(uid, mid) => {
    return await likesModel.deleteOne({user: uid, sneaker: sid})
}

export const findSneakersLikedByUser = async(uid) => {
    return await likesModel
        .find({user: uid}, {user: false})
        .populate('sneakers', 'shoeName')
        .exec()
}
export const findUsersThatLikeSneakers = async(mid) => {
    return await likesModel.find({sneaker: sid}, {sneaker: false})
        .populate('user', 'userName')
        .exec()
}

export const findAllLikes = async () =>
    await likesModel.find()
import likesModel from "./likes-model.js";

export const userLikesSneaker = async (like) => {
    return await likesModel.create(like)
}
export const userUnlikesSneaker = async(lid) => {
    return await likesModel.deleteOne({_id: lid})
}

export const findSneakersLikedByUser = async(uid) => {
    return await likesModel.find({uid: uid})
}

export const findAllLikes = async () =>
    await likesModel.find()
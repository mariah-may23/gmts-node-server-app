import commentsModel from './comments-model.js';

export const findSneakersCommentedByUser = async(uid) => {
    return commentsModel.find({uid: uid});
}
export const findComments = () => commentsModel.find();
export const createComment = (comment) => commentsModel.create(comment);
export const deleteComment = (cid) => commentsModel.deleteOne({_id: cid});